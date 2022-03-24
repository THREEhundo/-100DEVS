//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Man on Fire', 'Training Day', 'MacBeth']

movies.forEach((item, index, array) => {
	document.querySelector('h2').innerHTML += `${item} `
})

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10, 20, 30, 40, 50]
let triple = nums.forEach((item, i) => (nums[i] = item + 3))
console.log(nums)

//Find the average of all the numbers from question three
let runningNum = 0
let total = nums.forEach((x, i) => (runningNum += x))
let avg = runningNum / nums.length
console.log(avg)
