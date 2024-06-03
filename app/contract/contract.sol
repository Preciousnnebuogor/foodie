pragma solidity 0.8;


contract FoodLandOrders {

    address public admin;
    uint256 public orderCount;

    struct Order {
        uint256 id;
        address owner;
        uint256 amountPaid;
        bool isCompleted;
        bool isDelivered;
    }

    mapping(string => Order) public orders;
    mapping(address => string[]) public ownerOrders;

    event OrderAdded(uint256 id, string orderId, address owner, uint256 amountPaid);
    event OrderCompleted(string orderId);
    event OrderDelivered(string orderId);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyOwner(string memory orderId) {
        require(orders[orderId].owner == msg.sender, "Only owner can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addOrder(string memory orderId, uint256 amountPaid) public {
        require(orders[orderId].owner == address(0), "Order already exists");

        orderCount++;
        orders[orderId] = Order(orderCount, msg.sender, amountPaid, false, false);
        ownerOrders[msg.sender].push(orderId);

        emit OrderAdded(orderCount, orderId, msg.sender, amountPaid);
    }

    function markOrderAsCompleted(string memory orderId) public onlyAdmin {
        require(orders[orderId].owner != address(0), "Order does not exist");
        require(!orders[orderId].isCompleted, "Order already completed");

        orders[orderId].isCompleted = true;

        emit OrderCompleted(orderId);
    }

    function markOrderAsDelivered(string memory orderId) public onlyAdmin {
        require(orders[orderId].owner != address(0), "Order does not exist");
        require(orders[orderId].isCompleted, "Order must be completed first");
        require(!orders[orderId].isDelivered, "Order already delivered");

        orders[orderId].isDelivered = true;

        emit OrderDelivered(orderId);
    }

    function getOrder(string memory orderId) public view returns (Order memory) {
        require(orders[orderId].owner != address(0), "Order does not exist");
        return orders[orderId];
    }

    function getOwnerOrders(address owner) public view returns (string[] memory) {
        return ownerOrders[owner];
    }

    function changeAdmin(address newAdmin) public onlyAdmin {
        require(newAdmin != address(0), "Invalid address for new admin");
        admin = newAdmin;
    }
}
