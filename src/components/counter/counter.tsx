import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <div>
      <p class="text-red-600 text-9xl">Count: {count.value}</p>

      <p>
        <button
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick$={() => count.value++}
        >
          Increment
        </button>
      </p>
    </div>
  );
});
