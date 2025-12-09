import Link from "next/link";

export default function Home() {
  return (
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-4">

          <Link
              href="/expense-request"
              className="
              block w-full text-center
              bg-blue-600 hover:bg-blue-700
              text-white py-3 px-4 rounded-lg
              text-lg font-medium
              transition
            "
          >
            Заявка на расход
          </Link>

          <Link
              href="/expense-types"
              className="
              block w-full text-center
              bg-blue-600 hover:bg-blue-700
              text-white py-3 px-4 rounded-lg
              text-lg font-medium
              transition
            "
          >
            Настройка типов
          </Link>

        </div>
      </main>
  );
}
