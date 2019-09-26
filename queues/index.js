const createQueue = () => {
    const queue = [];

    return {
        enqueue(item) {
            queue.unshift(item);
        },
        dequeue() {
            return queue.pop();
        },
        peek() {
            return queue[queue.length - 1];
        },
        get length() {
            return queue.length;
        },
        isEmpty() {
            return queue.length === 0;
        }
    };
};

module.exports = createQueue;

const q = createQueue();

q.enqueue('One');
q.enqueue('Two');
q.enqueue('Three');

console.log(q.peek());

const q2 = createQueue();

q2.enqueue(1);
q2.enqueue(2);
q2.enqueue(3);

console.log(q2.peek());

