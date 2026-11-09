# TutorConnect — Tutor Booking Platform

Monorepo cho nền tảng kết nối và đặt lịch học cùng gia sư (**Tutor Booking Platform**), sử dụng **npm workspaces**.

## Cấu trúc dự án

```text
TutorConnect/
├── apps/
│   ├── api/                # Backend API (NestJS 11)
│   └── web/                # Frontend Web (Next.js 16 + Tailwind CSS v4)
├── packages/
│   └── shared/             # Hằng số & kiểu dữ liệu dùng chung (@tutor-booking/shared)
├── docker-compose.yml      # Dịch vụ PostgreSQL 16 & Redis 7 cho môi trường local
└── package.json            # Cấu hình monorepo & scripts chung
```

## Công nghệ sử dụng

- **Frontend (`apps/web`)**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Backend (`apps/api`)**: NestJS 11, TypeScript, `@nestjs/config`, `class-validator`, Jest
- **Shared (`packages/shared`)**: TypeScript
- **Hạ tầng local**: Docker Compose (PostgreSQL 16, Redis 7)

## Yêu cầu môi trường

- **Node.js** 24+
- **npm** 11+
- **Docker Desktop** *(tùy chọn, dùng khi cần chạy PostgreSQL / Redis local)*

> Trên Windows PowerShell, nếu lệnh `npm` bị chặn bởi Execution Policy, hãy dùng `npm.cmd`.

## Cài đặt & Chạy Local

### 1. Cài đặt dependencies

```powershell
npm.cmd install
```

### 2. Tạo file biến môi trường

```powershell
Copy-Item apps\api\.env.example apps\api\.env
Copy-Item apps\web\.env.example apps\web\.env.local
```

Biến môi trường mặc định:

- **`apps/api/.env`**
  - `NODE_ENV=development`
  - `PORT=3001`
  - `WEB_ORIGIN="http://localhost:3000"`
- **`apps/web/.env.local`**
  - `NEXT_PUBLIC_API_URL="http://localhost:3001/api/v1"`

### 3. Khởi chạy ở chế độ Development

Mở 2 terminal riêng biệt từ thư mục gốc:

```powershell
# Terminal 1: Chạy Backend API
npm.cmd run dev:api

# Terminal 2: Chạy Frontend Web
npm.cmd run dev:web
```

Địa chỉ truy cập:

- **Web**: `http://localhost:3000`
- **API**: `http://localhost:3001/api/v1` (route kiểm tra mặc định `GET /api/v1`)

## Các lệnh kiểm tra (Scripts)

Chạy từ thư mục gốc:

| Lệnh | Mô tả |
| --- | --- |
| `npm.cmd run dev:api` | Khởi chạy NestJS ở chế độ watch |
| `npm.cmd run dev:web` | Khởi chạy Next.js dev server |
| `npm.cmd run build` | Build toàn bộ workspaces (`api`, `web`) |
| `npm.cmd run lint` | Chạy ESLint cho toàn bộ workspaces |
| `npm.cmd run test` | Chạy unit test |
| `npm.cmd --workspace apps/api run test:e2e` | Chạy e2e test cho `apps/api` |

## Dịch vụ Docker Local (Tùy chọn)

Khởi chạy PostgreSQL và Redis bằng Docker Compose:

```powershell
docker compose up -d
```

Thông số mặc định trong `docker-compose.yml`:

- **PostgreSQL 16**: `localhost:5432` — database `tutor_booking`, user `tutor_user`, password `tutor_password`
- **Redis 7**: `localhost:6379`

Dừng các container khi không dùng:

```powershell
docker compose down
```

## Trạng thái hiện tại

- Hoàn thành **Project Setup** (Monorepo, NestJS skeleton, Next.js skeleton, Shared package, Docker Compose).
