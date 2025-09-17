# Scheduling System Specification (Calendly Clone)

## Executive Summary
A web-based scheduling platform that allows users to share their availability and let others book meetings without back-and-forth emails. The system integrates with calendar providers, handles timezone conversions, and automates meeting logistics.

## Core Features

### 1. User Management
- **Authentication**: Email/password, OAuth (Google, Microsoft, GitHub)
- **User Profiles**: Name, timezone, avatar, bio, welcome message
- **Account Types**: Free, Pro, Teams (with different feature limits)
- **Team Management**: Organizations, team members, roles, permissions

### 2. Event Types
- **One-on-One**: Standard 1:1 meetings
- **Group Events**: Classes, webinars with multiple attendees
- **Collective Events**: Round-robin assignment to team members
- **Recurring Events**: Weekly office hours, regular check-ins
- **Custom Durations**: 15, 30, 45, 60, 90 minutes, or custom

### 3. Availability Management
- **Working Hours**: Default weekly schedule
- **Date Overrides**: Specific date availability changes
- **Buffer Times**: Padding between meetings
- **Daily Limits**: Maximum meetings per day
- **Rolling Window**: Book only X days in advance
- **Minimum Notice**: Require X hours/days advance booking

### 4. Calendar Integration
- **Providers**: Google Calendar, Outlook, Office 365, iCal
- **Conflict Detection**: Check multiple calendars for conflicts
- **Event Creation**: Automatic calendar event creation
- **Two-way Sync**: Real-time availability updates

### 5. Booking Flow
- **Public Links**: Shareable scheduling links (username.app.com/event-type)
- **Invitee Experience**: Name, email, optional questions, timezone selection
- **Confirmation**: Email confirmations with calendar invites (.ics files)
- **Rescheduling**: Allow invitees to reschedule/cancel
- **Reminders**: Email/SMS reminders before meetings

## Technical Architecture

### Frontend
```
Technology Stack:
- Framework: React/Next.js or Vue/Nuxt
- State Management: Redux/Zustand or Pinia
- Styling: TailwindCSS
- Calendar UI: Custom or libraries (FullCalendar, react-big-calendar)
- Forms: React Hook Form / Formik
- Date/Time: date-fns or dayjs with timezone support
```

**Key Components:**
- Calendar picker widget
- Timezone selector
- Availability grid editor
- Booking confirmation flow
- Dashboard with analytics
- Event type builder
- Team management interface

### Backend
```
Technology Stack:
- API: Node.js/Express or Python/FastAPI
- Database: PostgreSQL (primary), Redis (caching/sessions)
- Queue: Bull/BullMQ or Celery for async tasks
- Email: SendGrid/Postmark/AWS SES
- SMS: Twilio
- File Storage: S3/Cloudinary for avatars
```

**API Endpoints:**
```
Auth:
POST   /auth/register
POST   /auth/login
POST   /auth/logout
POST   /auth/refresh
POST   /auth/oauth/:provider

Users:
GET    /users/me
PUT    /users/me
DELETE /users/me
GET    /users/:username/public

Event Types:
GET    /event-types
POST   /event-types
GET    /event-types/:id
PUT    /event-types/:id
DELETE /event-types/:id
GET    /users/:username/event-types (public)

Availability:
GET    /availability
PUT    /availability
GET    /availability/slots?date=&eventType=
POST   /availability/override

Bookings:
GET    /bookings
POST   /bookings
GET    /bookings/:id
PUT    /bookings/:id (reschedule)
DELETE /bookings/:id (cancel)
POST   /bookings/:id/confirm

Calendar:
GET    /calendar/accounts
POST   /calendar/connect
DELETE /calendar/disconnect/:id
GET    /calendar/events

Webhooks:
GET    /webhooks
POST   /webhooks
PUT    /webhooks/:id
DELETE /webhooks/:id
```

### Database Schema

```sql
-- Core Tables
users
├── id (UUID)
├── email
├── password_hash
├── username (unique)
├── timezone
├── avatar_url
├── created_at
└── updated_at

event_types
├── id
├── user_id (FK)
├── team_id (FK, nullable)
├── slug
├── title
├── description
├── duration_minutes
├── location_type (zoom/phone/in-person/custom)
├── buffer_before
├── buffer_after
├── is_active
└── metadata (JSONB)

availability_schedules
├── id
├── user_id (FK)
├── name
├── timezone
├── is_default
└── rules (JSONB - weekly patterns)

bookings
├── id
├── event_type_id (FK)
├── host_id (FK)
├── invitee_email
├── invitee_name
├── start_time
├── end_time
├── status (confirmed/cancelled/rescheduled)
├── meeting_url
├── cancellation_reason
└── metadata (JSONB - custom fields)

calendar_accounts
├── id
├── user_id (FK)
├── provider (google/outlook/ical)
├── access_token (encrypted)
├── refresh_token (encrypted)
├── calendar_id
└── is_primary

-- Supporting Tables
availability_overrides (specific date changes)
booking_questions (custom form fields)
booking_answers (responses to custom questions)
team_members
team_event_assignments
webhooks
webhook_events
email_templates
```

### Calendar Integration Architecture

**OAuth Flow:**
1. User initiates calendar connection
2. Redirect to provider OAuth consent
3. Receive authorization code
4. Exchange for access/refresh tokens
5. Store encrypted tokens
6. Fetch calendar list
7. User selects calendars to check/write

**Availability Calculation:**
```
1. Get base weekly schedule
2. Apply date-specific overrides
3. Fetch busy times from connected calendars
4. Subtract busy times from available slots
5. Apply buffer times
6. Filter by minimum notice period
7. Convert to invitee's timezone
8. Return available slots
```

### Key Algorithms

**Slot Generation:**
```python
def generate_slots(date, duration, schedule, busy_times):
    slots = []
    for time_range in schedule.get_ranges_for_date(date):
        current = time_range.start
        while current + duration <= time_range.end:
            slot = TimeSlot(current, current + duration)
            if not overlaps_with_busy(slot, busy_times):
                slots.append(slot)
            current += SLOT_INCREMENT (usually 15 or 30 min)
    return slots
```

**Timezone Handling:**
- Store all times in UTC in database
- Convert to user's timezone for display
- Use IANA timezone database
- Handle DST transitions properly

### Security Considerations

1. **Authentication:**
   - JWT tokens with refresh rotation
   - Rate limiting on auth endpoints
   - Account lockout after failed attempts
   - 2FA support

2. **Authorization:**
   - Row-level security for multi-tenancy
   - API key management for integrations
   - CORS configuration
   - Webhook signature verification

3. **Data Protection:**
   - Encrypt OAuth tokens at rest
   - HTTPS everywhere
   - PII handling compliance (GDPR/CCPA)
   - Audit logging

### Scalability Considerations

1. **Caching Strategy:**
   - Redis for session management
   - Cache available slots (5-minute TTL)
   - CDN for static assets

2. **Background Jobs:**
   - Email/SMS sending
   - Calendar sync
   - Reminder notifications
   - Webhook delivery
   - Cleanup old bookings

3. **Database Optimization:**
   - Indexes on frequently queried fields
   - Partitioning for bookings table
   - Read replicas for analytics

### Third-Party Services

**Required Integrations:**
- **Video Conferencing**: Zoom, Google Meet, MS Teams APIs
- **Payment**: Stripe (for paid bookings/subscriptions)
- **Analytics**: Segment, Mixpanel
- **Monitoring**: Sentry, Datadog
- **SMS**: Twilio
- **Email**: SendGrid/Postmark

### MVP Feature Set

**Phase 1 (Core):**
- User registration/login
- Single event type creation
- Basic availability (working hours)
- Google Calendar integration
- Email confirmations
- Public booking page

**Phase 2 (Essential):**
- Multiple event types
- Timezone support
- Rescheduling/cancellation
- Dashboard with upcoming meetings
- Custom booking questions

**Phase 3 (Growth):**
- Team features
- Payment collection
- Outlook integration
- Recurring events
- Buffer times
- Reminders

### Deployment Architecture

```
Infrastructure:
- Frontend: Vercel/Netlify or AWS CloudFront + S3
- Backend: AWS ECS/EKS or Heroku
- Database: AWS RDS or Supabase
- Queue: AWS SQS or Redis
- File Storage: AWS S3

Environments:
- Development (local)
- Staging (testing)
- Production (live)

CI/CD:
- GitHub Actions or GitLab CI
- Automated testing
- Database migrations
- Blue-green deployments
```

### Monitoring & Analytics

**Key Metrics:**
- Booking conversion rate
- Average time to book
- No-show rate
- User activation rate
- Calendar sync success rate
- API response times
- Error rates by endpoint

**Tools:**
- Application monitoring: Sentry
- Infrastructure: CloudWatch/Datadog
- Analytics: Mixpanel/Amplitude
- Logging: ELK stack or CloudWatch Logs

### Cost Estimates (AWS, 10K users)

```
Monthly Costs:
- EC2/ECS: $200-400
- RDS (PostgreSQL): $100-200
- ElastiCache (Redis): $50-100
- S3 + CloudFront: $20-50
- SES (email): $10-30
- Total: ~$400-800/month
```

### Development Timeline

**Solo Developer:**
- MVP: 3-4 months
- Full Feature Set: 8-12 months

**Small Team (3-4 devs):**
- MVP: 6-8 weeks
- Full Feature Set: 4-6 months

### Challenges & Solutions

1. **Calendar Sync Complexity:**
   - Solution: Use battle-tested libraries (nylas, cronofy)
   - Fallback: Start with one provider (Google)

2. **Timezone Bugs:**
   - Solution: Always store UTC, comprehensive testing
   - Use established libraries (moment-timezone, date-fns-tz)

3. **Double Bookings:**
   - Solution: Distributed locks, optimistic concurrency control
   - Real-time calendar checking before confirmation

4. **Email Deliverability:**
   - Solution: Proper SPF/DKIM setup
   - Use established ESP (SendGrid/Postmark)
   - Monitor bounce rates

5. **Scaling Issues:**
   - Solution: Horizontal scaling, caching layer
   - Database connection pooling
   - CDN for static assets