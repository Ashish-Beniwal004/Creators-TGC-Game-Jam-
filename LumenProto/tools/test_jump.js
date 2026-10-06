import * as Matter from 'matter-js';

const engine = Matter.Engine.create();
engine.world.gravity.y = 1.5;

const body = Matter.Bodies.rectangle(0, 400, 40, 80, {
    inertia: Infinity,
    friction: 0.05,
    frictionAir: 0.02,
    restitution: 0.0
});

Matter.Composite.add(engine.world, body);
Matter.Body.setVelocity(body, { x: 4, y: -12 });

let ticks = 0;
let startY = 400;
let minY = 400;
let x = 0;

console.log(`Start: y=${body.position.y}`);
while(ticks < 60) {
    Matter.Body.setVelocity(body, { x: 4, y: body.velocity.y }); // Player enforces moveX=4
    Matter.Engine.update(engine, 1000/60);
    if (body.position.y < minY) minY = body.position.y;
    // console.log(`Tick ${ticks}: x=${body.position.x}, y=${body.position.y}`);
    ticks++;
    if (body.velocity.y >= 0 && ticks < 20) {
        console.log(`Apex reached at tick ${ticks}, y=${body.position.y}. Max height jumped: ${startY - minY}, Horizontal dist: ${body.position.x}`);
    }
}
console.log(`After 60 ticks: x=${body.position.x}, y=${body.position.y}`);
