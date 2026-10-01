// TDS Web - Map Engine & Terrain Generator (With SimpleCity & Random Selection)

class GameMap {
    constructor(mapId = 'crossroads') {
        this.id = mapId;
        this.width = 1000;
        this.height = 650;
        this.path = [];
        this.cliffs = [];
        this.obstacles = [];
        this.decorations = [];
        this.theme = {};

        this.loadMap(mapId);
    }

    loadMap(mapId) {
        this.id = 'simplecity';
        this.theme = {
            bg: '#858585',
            pathColor: '#000000',
            pathBorder: '#333333',
            cliffBg: '#383838',
            cliffBorder: '#555555',
            accentColor: '#38bdf8'
        };

        // Exact winding city track layout extracted from assets/maps/debug/simplecity.svg
        this.path = [
            { x: 136, y: 0 },
            { x: 136, y: 305 },
            { x: 262, y: 305 },
            { x: 262, y: 169 },
            { x: 684, y: 169 },
            { x: 684, y: 74 },
            { x: 847, y: 74 },
            { x: 847, y: 265 },
            { x: 426, y: 265 },
            { x: 426, y: 373 },
            { x: 847, y: 373 },
            { x: 847, y: 433 },
            { x: 1000, y: 433 }
        ];

        this.cliffs = [{ x: 176, y: 438, radius: 58 }];

        this.obstacles = [
            { x: 320, y: 580, radius: 65 } // "cant place here" zone from SVG
        ];

        this.pathLength = 0;
        this.segments = [];
        for (let i = 0; i < this.path.length - 1; i++) {
            const p1 = this.path[i];
            const p2 = this.path[i + 1];
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const dist = Math.hypot(dx, dy);
            this.segments.push({ p1, p2, dist, cumDist: this.pathLength });
            this.pathLength += dist;
        }
    }

    getPositionAtDistance(dist) {
        if (dist <= 0) return { x: this.path[0].x, y: this.path[0].y, angle: 0 };
        if (dist >= this.pathLength) {
            const last = this.path[this.path.length - 1];
            return { x: last.x, y: last.y, angle: 0 };
        }

        for (let seg of this.segments) {
            if (dist >= seg.cumDist && dist <= seg.cumDist + seg.dist) {
                const ratio = (dist - seg.cumDist) / seg.dist;
                const x = seg.p1.x + (seg.p2.x - seg.p1.x) * ratio;
                const y = seg.p1.y + (seg.p2.y - seg.p1.y) * ratio;
                const angle = Math.atan2(seg.p2.y - seg.p1.y, seg.p2.x - seg.p1.x);
                return { x, y, angle };
            }
        }
        return { x: this.path[0].x, y: this.path[0].y, angle: 0 };
    }

    isCliff(x, y) {
        return this.cliffs.some(c => Math.hypot(c.x - x, c.y - y) <= c.radius);
    }

    isNearPath(x, y, radius = 25) {
        for (let seg of this.segments) {
            const d = this.distToSegment({ x, y }, seg.p1, seg.p2);
            if (d < 25 + radius) return true;
        }
        return false;
    }

    distToSegment(p, v, w) {
        const l2 = (w.x - v.x) ** 2 + (w.y - v.y) ** 2;
        if (l2 === 0) return Math.hypot(p.x - v.x, p.y - v.y);
        let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
        t = Math.max(0, Math.min(1, t));
        return Math.hypot(p.x - (v.x + t * (w.x - v.x)), p.y - (v.y + t * (w.y - v.y)));
    }

    isValidPlacement(x, y, placementType, existingTowers = []) {
        if (x < 30 || x > this.width - 30 || y < 30 || y > this.height - 30) return false;
        const onCliff = this.isCliff(x, y);
        if ((placementType === 'cliff' && !onCliff) || (placementType !== 'cliff' && onCliff)) return false;
        if (this.isNearPath(x, y, 20)) return false;

        for (let t of existingTowers) {
            if (Math.hypot(t.x - x, t.y - y) < 32) return false;
        }

        for (let obs of this.obstacles) {
            if (Math.hypot(obs.x - x, obs.y - y) < obs.radius + 15) return false;
        }

        return true;
    }

    render(ctx) {
        const mapImg = (typeof assets !== 'undefined') ? assets.getImage('map_simplecity') : null;
        if (mapImg && mapImg.complete && mapImg.naturalWidth > 0) {
            ctx.drawImage(mapImg, 0, 0, this.width, this.height);
        } else {
            ctx.fillStyle = this.theme.bg;
            ctx.fillRect(0, 0, this.width, this.height);
        }

        for (let obs of this.obstacles) {
            ctx.beginPath();
        }

        if (this.path.length > 1) {
            ctx.beginPath();
            ctx.moveTo(this.path[0].x, this.path[0].y);
            for (let i = 1; i < this.path.length; i++) {
                ctx.lineTo(this.path[i].x, this.path[i].y);
            }
            ctx.strokeStyle = this.theme.pathBorder;
            ctx.lineWidth = 54;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(this.path[0].x, this.path[0].y);
            for (let i = 1; i < this.path.length; i++) {
                ctx.lineTo(this.path[i].x, this.path[i].y);
            }
            ctx.strokeStyle = this.theme.pathColor;
            ctx.lineWidth = 46;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(this.path[0].x, this.path[0].y);
            for (let i = 1; i < this.path.length; i++) {
                ctx.lineTo(this.path[i].x, this.path[i].y);
            }
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 2;
            ctx.setLineDash([8, 8]);
            ctx.stroke();
            ctx.setLineDash([]);

            const endPoint = this.path[this.path.length - 1];
            ctx.beginPath();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('BASE', endPoint.x, endPoint.y);

            const startPoint = this.path[0];
            ctx.beginPath();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 10px system-ui, sans-serif';
            ctx.fillText('SPAWN', startPoint.x, startPoint.y);
        }
    }
}
