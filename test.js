*/
var createCounter = function(init) {
    return{
           increment: (init)=> ++init,
           decrement: (init)=> --init,
           reset: (init)=>init

    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */