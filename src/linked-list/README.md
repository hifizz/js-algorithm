# 链表

链表是列表的一种实现。指通过抽象每一个数据成一个节点，并在节点上记录下一个节点的指针，所形成的这样一个数据结构。

## 功能

- append
- find
- delete
- isEmpty
- insert(TODO)

## 复杂度

TODO(时间和空间复杂度)

## 其他

本链表实现主要参考《数据结构与算法--C语言描述》和 [GitHub·linked-list](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)

## 问题

就目前实现来说，使用TypeScript来实现链表，在实例化链表并append一个值之后，TS并不能推导出链表head不为空，即使我们知道一定不为空。
即使在append方法通过一些方法解决这个问题，在append之后并delete这个值，TS还是不能推导出链表的head节点是否为空。
这个问题需要再一步思考：）
