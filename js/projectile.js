// TDS Web - Projectiles & Visual Particle Effects

class Projectile {
    constructor({ startX, startY, target, damage, speed, splashRadius, canHarmLead, typeKey, sourceTower }) {
        this.x = startX;
        this.y = startY;
        this.target = target;
        this.damage = damage;
        this.speed = speed;
        this.splashRadius = splashRadius || 0;
        this.canHarmLead = canHarmLead || false;
        this.typeKey = typeKey;
        this.sourceTower = sourceTower;

        this.targetX = target ? target.x : startX;
        this.targetY = target ? target.y : startY;
        this.dead = false;
    }

    update(dt, enemies, particles) {
        if (this.dead) return;

        // Track moving target if alive
        if (this.target && !this.target.dead) {
            this.targetX = this.target.x;
            this.targetY = this.target.y;
        }

        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const dist = Math.hypot(dx, dy);

        const moveStep = this.speed * dt;

        if (dist <= moveStep) {
            // Hit Target!
            this.x = this.targetX;
            this.y = this.targetY;
            this.hit(enemies, particles);
            this.dead = true;
        } else {
            this.x += (dx / dist) * moveStep;
            this.y += (dy / dist) * moveStep;
        }
    }

    hit(enemies, particles) {
        const dmgType = (this.typeKey === 'demoman' || this.typeKey === 'rocketeer' || this.typeKey === 'mortar') ? 'explosive' : 'bullet';

        if (this.splashRadius > 0) {
            // Splash Damage AOE
            sounds.playExplosion();

            // Add explosion particles
            for (let i = 0; i < 16; i++) {
                const angle = Math.random() * Math.PI * 2;
                const spd = 50 + Math.random() * 120;
                particles.push({
                    x: this.x,
                    y: this.y,
                    vx: Math.cos(angle) * spd,
                    vy: Math.sin(angle) * spd,
                    color: i % 2 === 0 ? '#f97316' : '#ef4444',
                    size: 3 + Math.random() * 5,
                    life: 0.35,
                    maxLife: 0.35
                });
            }

            // Damage all enemies in splash radius
            enemies.forEach(e => {
                if (e.dead || e.reachedEnd) return;
                if (this.sourceTower && !this.sourceTower.canTargetEnemy(e)) return;

                const dist = Math.hypot(e.x - this.x, e.y - this.y);
                if (dist <= this.splashRadius) {
                    const dmgDealt = e.takeDamage(this.damage, dmgType, this.canHarmLead);
                    if (this.sourceTower) {
                        this.sourceTower.totalDamageDealt += dmgDealt;
                        if (e.dead) this.sourceTower.kills++;
                    }
                }
            });
        } else {
            // Single target hit
            if (this.target && !this.target.dead) {
                const dmgDealt = this.target.takeDamage(this.damage, dmgType, this.canHarmLead);
                if (this.sourceTower) {
                    this.sourceTower.totalDamageDealt += dmgDealt;
                    if (this.target.dead) this.sourceTower.kills++;
                }

                // Spark particle
                for (let i = 0; i < 4; i++) {
                    const angle = Math.random() * Math.PI * 2;
                    particles.push({
                        x: this.x,
                        y: this.y,
                        vx: Math.cos(angle) * 40,
                        vy: Math.sin(angle) * 40,
                        color: '#facc15',
                        size: 2,
                        life: 0.15,
                        maxLife: 0.15
                    });
                }
            }
        }
    }

    render(ctx) {
        if (this.dead) return;

        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.splashRadius > 0 ? 5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = this.splashRadius > 0 ? '#f97316' : '#facc15';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
    }
}
