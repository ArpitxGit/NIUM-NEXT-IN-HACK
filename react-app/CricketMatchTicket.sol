// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CricketMatchTicket is ERC721 {
    address public owner;
    uint256 public matchCount;

    event MatchCreated(
        uint256 indexed matchId,
        string indexed name,
        bool indexed isActive
    );
    event BoughtTicket(
        uint256 indexed matchId,
        uint256 indexed Quantity,
        address indexed Buyer
    );

    struct Match {
        uint256 id;
        string name;
        string location;
        string date;
        uint256 totalTickets;
        uint256 soldTickets;
        bool isActive;
    }

    mapping(uint256 => Match) public matches;
    mapping(uint256 => mapping(address => uint256)) public tickets;

    constructor() ERC721("CricketMatchTicket", "CMT") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    function createMatch(
        string memory _name,
        string memory _location,
        string memory _date,
        uint256 _totalTickets
    ) public onlyOwner returns (uint256) {
        matchCount++;
        Match storage newMatch = matches[matchCount];
        newMatch.id = matchCount;
        newMatch.name = _name;
        newMatch.location = _location;
        newMatch.date = _date;
        newMatch.totalTickets = _totalTickets;
        newMatch.isActive = true;
        emit MatchCreated(matchCount, _name, newMatch.isActive);
        return matchCount;
    }

    function buyTicket(uint256 _matchId, uint256 _quantity) public payable {
        require(matches[_matchId].isActive, "Match is not active.");
        require(_quantity > 0, "Quantity must be greater than zero.");
        require(
            _quantity <=
                matches[_matchId].totalTickets - matches[_matchId].soldTickets,
            "Not enough tickets available."
        );
        require(msg.value == _quantity * 1 ether, "Incorrect value sent.");

        for (uint256 i = 0; i < _quantity; i++) {
            uint256 tokenId = matches[_matchId].soldTickets + 1;
            matches[_matchId].soldTickets++;
            _safeMint(msg.sender, tokenId);
            tickets[_matchId][msg.sender]++;
        }
        emit BoughtTicket(_matchId, _quantity, msg.sender);
    }

    function getMatch(uint256 _matchId)
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            string memory,
            uint256,
            uint256,
            bool
        )
    {
        Match storage matchInfo = matches[_matchId];
        return (
            matchInfo.id,
            matchInfo.name,
            matchInfo.location,
            matchInfo.date,
            matchInfo.totalTickets,
            matchInfo.soldTickets,
            matchInfo.isActive
        );
    }

    function getAllMatches() public view returns (Match[] memory) {
        Match[] memory matchList = new Match[](matchCount);
        for (uint256 i = 1; i <= matchCount; i++) {
            matchList[i - 1] = matches[i];
        }
        return matchList;
    }

    function getTicket(uint256 _matchId, uint256 _ticketId)
        public
        view
        returns (address)
    {
        require(_exists(_ticketId), "Token does not exist.");
        require(
            ownerOf(_ticketId) == msg.sender || msg.sender == owner,
            "Unauthorized access."
        );
        require(
            tickets[_matchId][msg.sender] > 0,
            "You do not own any tickets for this match."
        );
        return ownerOf(_ticketId);
    }

    function withdraw() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
