学习笔记
栈和队列的实现与特性:
先入后出；添加 删除均为O(1)     查询O(n)
仅在表尾进行插入或删除操作。表尾称为栈顶，相应地，表头称为栈底。

先入先出；添加 删除均为O(1)    查询O(n)
队列（Queue）是一种先进先出（FIFO，First-In-First-Out）的线性表。

在具体应用中通常用链表或者数组来实现。队列只允许在后端（称为 rear）进行插入操作，在前端（称为 front）进行删除操作。

队列的操作方式和堆栈类似，唯一的区别在于队列只允许新数据在后端进行添加。

哈希表 映射 集合的特性：
树，二叉树和二叉搜索树:
链表是特殊化的树
树是特殊化的图

二叉树遍历： 
前序：根 左 右
中序：左 根 右
后序：左 右 根

二叉搜索树：
左子树 > 根 > 右子树
中序遍历 升序排列