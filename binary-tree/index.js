const createBinaryNode = (key) => {
    return {
        key,
        left: null,
        right: null,
        addLeft (leftKey) {
            const newLeft = createBinaryNode(leftKey);
            this.left = newLeft;
            return newLeft;
        },
        addRight (rightKey) {
            const newRight = createBinaryNode(rightKey);
            this.right = newRight;
            return newRight;
        },
    }
}

const TRAVERSALS = {
    IN_OREDER: (node, visitFn) => {
        if (node !== null) {
            TRAVERSALS.IN_OREDER(node.left, visitFn);
            visitFn(node);
            TRAVERSALS.IN_OREDER(node.right, visitFn);
        }
    },
    PRE_ORDER: (node, visitFn) => {
        if (node !== null) {
            visitFn(node);
            TRAVERSALS.PRE_ORDER(node.left, visitFn);
            TRAVERSALS.PRE_ORDER(node.right, visitFn);
        }
    },
    POST_ORDER: (node, visitFn) => {
        if (node !== null) {
            TRAVERSALS.POST_ORDER(node.left, visitFn);
            TRAVERSALS.POST_ORDER(node.right, visitFn);
            visitFn(node);
        }
    },
};

const createBinaryTree = (rootKey) => {
    const root = createBinaryNode(rootKey);

    return {
        root,
        print(traversalType = 'IN_OREDER') {
            let result = '';

            const visit = node => {
                result += result.length === 0 ? node.key : ` => ${node.key}`
            };

            TRAVERSALS[traversalType](this.root, visit);

            return result;
        } 
    }
};


const tree = createBinaryTree('a');
const b = tree.root.addLeft('b');
const c = tree.root.addRight('c');
const d = b.addLeft('d');
const e = d.addRight('e');
const f = c.addLeft('f');
const g = c.addRight('g');

console.log(tree.print('PRE_ORDER'));