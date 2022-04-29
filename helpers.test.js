const {
    findMean,
    findMedian,
    findMode,
} = require('./helpers');

describe("#findMedian", function(){
    it("finds median of an even set of nums", function(){
        expect(findMedian([1,-1,4,2])).toEqual(1.5)
    })
    it("finds median of an odd set of nums", function(){
        expect(findMedian([1,-1,4])).toEqual(1)
    })
})

describe("#findMean", function(){
    it("finds the mean of an empty set of nums", function(){
        expect(findMean([])).toEqual(0)
    })
    it("finds the mean of a set of nums", function(){
        expect(findMean([1,-1,4,2])).toEqual(1.5)
    })
})

describe("#findMode", function(){
    it("finds the mode of a set of nums", function(){
        expect(findMode([1,1,1,2,2,3])).toEqual(1)
    })
})