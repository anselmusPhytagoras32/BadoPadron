# Sukat: Digital Tailor's Legder
Sukat is an open-source application made to allow digitalization for the tailor industry and help assist owners to manage the customers, queues, orders, and measurments efficiently. This also allows customers to have a reliable software that tracks whether their order is accomplished or not without going to the physical store back and forth, saving time and transportation fees.

## Entity Relational Diagram

```mermaid
erDiagram
    OWNER ||--o{ CUSTOMER : manages
    CUSTOMER ||--o{ MEASUREMENT : has
    CUSTOMER ||--o{ ORDER : places
    MEASUREMENT ||--o{ ORDER : applies_to

    OWNER {
        int id PK
        string name
        string role
    }

    CUSTOMER {
        int id PK
        int owner_id FK
        string name
        string phone_number UK
        string address
        datetime created_at
    }

    MEASUREMENT {
        int id PK
        int customer_id FK
        string label
        float chest
        float waist
        float hips
        float shoulder
        float length
        datetime created_at
    }

    ORDER {
        int id PK
        int customer_id FK
        int measurement_id FK
        string item_type
        string status
        date due_date
        float total_price
        float downpayment
    }
```
## Key Features

* **Measurement Vault:** Dedicated fields for different clothes. No more re-measuring for repeat customers.
* **Live Queue:** A MUI Timeline or Card list showing orders by "Due Date." It color-codes them: Yellow (Due in 3 days), Red (Due tomorrow).
* **One-Tap Update:** A button that generates a pre-filled SMS/Viber message: "Hi [Name], your [Order] is ready for fitting/pickup!"
