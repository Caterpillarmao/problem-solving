// Given an integer, write and program to count the number of 1 in its binary format.
//     The time complexity should be no more than O(d) where d is the number of the binary digits.
//     Please give your test inputs and expected outputs.

//first way
let num = 123;
let binaryNum = num.toString(2);
let result = (binaryNum.match(/1/g) || []).length;
//second way

function countOne (num){
    let count = 0;
    while (num > 0)
    {
        count += num & 1;
        num >>= 1;
    }
    return count;
}


//     Given a binary tree like blew:
//     1
//     /       \
//   2          3
// /     \     /    \
// 4         5 6        8
// Please write a program to print the tree like below:
//     1
// 3 2
// 4 5 6 8

function printTree (root){
    let queue = [];
    queue.push(root);
    let height = 1;
    while(queue.length > 0){
        let tempQueue = [];
        if(height%2 == 1){
            while(queue.length > 0){
                let temp = queue.shift();
                if(temp.left){
                    tempQueue.push(temp.left);
                }
                if(temp.right){
                    tempQueue.push(temp.right);
                }
            }
        }else{
            while(queue.length > 0){
                let temp = queue.pop();
                if(temp.right){
                    tempQueue.unshift(temp.right);
                }
                if(temp.left){
                    tempQueue.unshift(temp.left);
                }
            }

        }
        queue.push.apply(queue,tempQueue);
        height++;
    }
}


// Given a string, please write a program to convert it to an integer.

Math.trunc(num);


//  Given an array of integers A, write a program to find the amount of pairs (x, y) such that A[i] = x , A[j] = y , where i < j and x > y.
//test case： var arr = [9,8,7,6,5,4,3,2,1];
function findPair (arr){
    let result = [];
    for(let i = 1; i < arr.length; i++ ){
        for(let j = i-1; j >= 0; j--){
            if(arr[j] > arr[i]){
                var temp = [];
                temp[0] = arr[i];
                temp[1] = arr[j];
                result.push(temp);
            }
        }
    }
    return result;
}

//Design a container that can receive a stream of integer inputs and give their median, that is:
// 1)	Receive one number at a time as stream input.
// 2)	Provide at any time the median number from all stream inputs currently received by your container.
//     For example:  stream inputs = 2,3,9,1,7. At this time if we call this container’s interface described in 2) , we get median = 3.
// Later if stream continues to input and we get 23,11,4, all current inputs = 2,3,9,1,7,23,11,4，and now median = (4+7)/2=5.5


/* because javascript doesn't have priorityQueue, so I use java to implement*/
public class MedianTracker {
    private PriorityQueue<Integer> min;
    private PriorityQueue<Integer> max;

    public MedianTracker() {
        max = new PriorityQueue<Integer>();
        min = new PriorityQueue<Integer>(11, Collections.reverseOrder());
    }

    public void read(int value) {
    if (min.isEmpty() || value <= min.peek()) {
    min.offer(value);
} else {
    max.offer(value);
}
if (min.size() - max.size() >= 2) {
    max.offer(min.poll());
} else if (max.size() > min.size()) {
    min.offer(max.poll());
}
}

public Double median() {
    int size = size();
    if (size == 0) {
        return null;
    } else if (size % 2 != 0) {
        return (double) (min.peek());
    } else {
        return (min.peek() + max.peek()) / 2.0;
    }
}

private int size() {
    return min.size() + max.size();
}
}