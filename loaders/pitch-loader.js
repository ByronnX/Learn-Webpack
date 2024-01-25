/**
 * pitchLoader主要的功能有两个
 * 1. 他可以在正常loader之前执行，并且他是从左到右执行
 * 2. 他有熔断机制
 *      熔断机制就是：
 *      nomalalLoader有：test1,test2,test3
 *      pitchLoader有：pitch1,pitch2,pitch3
 *      正常执行顺序是：pitch1 =》 pitch2 =》 pitch3 =》 test3 => test2 => test1 
 *      但是熔断机制就比如在pitch2的时候return出去了，那么后面的都不执行了，只执行上一个loader的正常方法，也就是test1。
 *      熔断机制的执行顺序：pitch1 => pitch2(return) => test1
 */ 