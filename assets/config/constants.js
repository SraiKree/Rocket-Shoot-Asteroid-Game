export const GAME_CONFIG = {
    // Canvas dimensions
    CANVAS_WIDTH: 800,
    CANVAS_HEIGHT: 600,
    
    // Mobile breakpoints
    MOBILE_BREAKPOINT: 768,
    
    // Game elements
    ROCKET: {
        WIDTH: 40,
        HEIGHT: 60,
        SPEED: 6,
        INITIAL_HP: 50,
        MOBILE_SPEED: 8
    },
    
    BULLET: {
        SPEED: 8,
        SIZE: 6,
        MOBILE_SIZE: 8,
        FIRE_RATE: 200 // ms between shots
    },
    
    ASTEROID: {
        BASE_SIZE: 25,
        MOBILE_SIZE: 30,
        ROTATION_SPEED: 0.02,
        SPAWN_RATE: 0.010
    },
    
    PARTICLES: {
        DESKTOP_COUNT: 200,
        MOBILE_COUNT: 50
    },
    
    STARS: {
        DESKTOP_COUNT: 100,
        MOBILE_COUNT: 50
    }
};