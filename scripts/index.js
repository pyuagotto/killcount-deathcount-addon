//@ts-check
import { world,Player } from '@minecraft/server';

world.afterEvents.entityDie.subscribe((ev) => {
    const { damageSource , deadEntity } = ev;
    const killer = damageSource.damagingEntity;
    
    if(deadEntity instanceof Player) {
        //killcount
        if(killer instanceof Player && killer.id !== deadEntity.id){
            world.scoreboard.getObjective("killcount")?.addScore(killer,1);
        }

        //deathcount
        world.scoreboard.getObjective("deathcount")?.addScore(deadEntity,1);
    }
});