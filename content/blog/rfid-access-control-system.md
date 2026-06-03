---
title: "RFID Access Control: Building an IoT System"
date: "2026-04-20"
tags: ["IoT", "Hardware", "TypeScript", "Node.js"]
excerpt: "How I built an RFID-based access control system using Arduino, Node.js, and TypeScript — from hardware setup to API design."
---

## Project Overview

This RFID access control system manages entry to restricted areas using RFID cards and a web-based admin panel. Users tap their cards, and the system logs access events in real-time.

## Hardware Setup

The system uses:
- **Arduino Uno** with an RC522 RFID module
- **Servo motor** for door lock mechanism
- **LED indicators** for access granted/denied
- **Buzzer** for audio feedback

## Software Architecture

```
RFID Reader → Arduino → Serial → Node.js Server → PostgreSQL
                        ↑                        ↓
                     WebSocket ←── Dashboard (React)
```

The Arduino reads card UIDs and sends them over serial. A Node.js server processes authentication against a PostgreSQL database, then sends access decisions back.

## API Design

```
POST /api/access     # Authenticate card tap
GET  /api/logs       # Get access history
POST /api/cards      # Register new cards
```

## Lessons Learned

1. **Serial communication buffering** — Arduino sends data faster than serial reads; implement a line buffer protocol
2. **Fail-safe design** — Door defaults to locked on power loss; manual override key required
3. **Logging is critical** — Every access attempt, successful or not, must be logged for security audits
