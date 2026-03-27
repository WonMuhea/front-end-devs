# 2026 Staff Engineer & PhD Study Plan: Distributed Systems
**Target Books:** - *Designing Data-Intensive Applications* (DDIA) - Martin Kleppmann
- *System Design Interview Vol 1 & 2* - Alex Xu
- *Database Internals* - Alex Petrov

---

## Block 1: The Write Path (Storage Engines & Local Efficiency)
*Goal: Understand how data moves from a line of code to the physical disk.*

| Resource | Chapter / Topic | Key Learning Point |
| :--- | :--- | :--- |
| **Database Internals** | Ch. 1 & 2 (B-Trees) | How RDBMS (Postgres/MySQL) manages pages. |
| **Database Internals** | Ch. 7 (LSM-Trees) | Why write-heavy systems use Log-Structured storage. |
| **DDIA** | Ch. 3 (Storage & Retrieval) | The trade-off between Read vs. Write amplification. |
| **Alex Xu (Vol 1)** | Ch. 6 (KV Store Design) | Putting an interface in front of a storage engine. |

---

## Block 2: The Scaling Problem (Partitioning & Replication)
*Goal: Moving beyond a single machine. These must be studied together.*

| Resource | Chapter / Topic | Key Learning Point |
| :--- | :--- | :--- |
| **DDIA** | Ch. 5 (Replication) | Leader-based vs. Leaderless (Dynamo-style). |
| **DDIA** | Ch. 6 (Partitioning) | Sharding logic and rebalancing strategies. |
| **Alex Xu (Vol 1)** | Ch. 5 (Consistent Hashing) | The math behind horizontal scaling. |
| **Database Internals** | Ch. 11 (Consistency Models) | Strict vs. Eventual consistency at the node level. |

---

## Block 3: The "Truth" Problem (Transactions & Consensus)
*Goal: Handling partial failures and ensuring data integrity.*

| Resource | Chapter / Topic | Key Learning Point |
| :--- | :--- | :--- |
| **DDIA** | Ch. 7 (Transactions) | Isolation levels (Read Committed to Serializable). |
| **DDIA** | Ch. 9 (Consensus) | Linearizability and the "Unsolvable" problems. |
| **Database Internals** | Ch. 14 (Paxos & Raft) | How nodes "vote" on the state of the system. |
| **Alex Xu (Vol 2)** | Ch. 7 (Hotel Reservation) | Managing concurrency and double-booking. |

---

## Block 4: The Real-Time Path (Event Streaming)
*Goal: Decoupling services using message-driven architecture.*

| Resource | Chapter / Topic | Key Learning Point |
| :--- | :--- | :--- |
| **DDIA** | Ch. 11 (Stream Processing) | Consumer groups, partitioning, and time-tracking. |
| **Alex Xu (Vol 2)** | Ch. 4 (Distributed MQ) | Designing a system like Kafka from scratch. |
| **Alex Xu (Vol 2)** | Ch. 13 (Stock Exchange) | Low-latency matching engines (Relevant for your Stock App). |

---

## Strategic Advice for 2026:
1. **The PhD Connection:** Use *Database Internals* for your formal citations on algorithmic complexity (Big O of tree operations).
2. **The Staff Interview:** Use *Alex Xu* to practice the "Whiteboard" flow, but use *DDIA* to defend your choices when the interviewer asks "Why not use a NoSQL database here?"
3. **The Project Link:** When implementing your **Balesuk SyncService**, focus heavily on **Block 2** and **Block 3** (Conflict Resolution and Replication).