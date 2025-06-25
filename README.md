# KhOlAn Monorepo

Цей репозиторій використовує **Turborepo** для організації монорепозиторію з фронтендом, бекендом і спільними пакетами.

---

## 📁 Структура проєкту

<pre>
kholan/
├── apps/                     # Основні застосунки
│   ├── web/                  # Фронтенд (Next.js)
│   └── api/                  # Бекенд (NestJS)
│
├── packages/                 # Спільні пакети
│   └── shared/               # Компоненти інтерфейсу
│   └── types/                # Спільні типи TypeScript
│
├── .gitignore                # Правила ігнорування для Git
├── .prettierrc               # Конфіг Prettier
├── .prettierignore           # Ігнор для Prettier
│
├── package.json              # Скрипти та загальні залежності
├── pnpm-lock.yaml
└── pnpm-workspace.yaml       # Робоча область для монорепозиторію
├── tsconfig.json             # Головний конфіг TypeScript з project references
└── turbo.json                # Конфіг Turborepo
</pre>

---

## ⚙️ Скрипти

| Команда       | Опис                             |
| ------------- | -------------------------------- |
| `pnpm dev`    | Запуск dev-серверів              |
| `pnpm build`  | Збірка всіх застосунків          |
| `pnpm lint`   | Лінтинг коду                     |
| `pnpm format` | Форматування коду через Prettier |

---

## 🧰 Технології

- 🔷 **Next.js** — фронтенд
- 🟦 **NestJS** — бекенд
- ✨ **TypeScript** — типізація в усьому проєкті
- 🚀 **Turborepo** — керування монорепозиторієм
- 🧹 **Prettier + ESLint** — форматування та перевірка якості коду
- 📦 **PNPM Workspaces** — керування залежностями
