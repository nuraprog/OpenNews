import axios from "axios";
import { ref, resolveComponent } from "vue";

export default async function news(fields: object) {
  const status = ref(undefined);

  const convert = new Promise((resolve) => {
    const converted = ref("");

    for (let [key, value] of Object.entries(fields)) {
      converted.value += `${key}=${value}&`;
    }

    resolve(converted.value.substring(0, converted.value.length - 1));
  });
  const result = await convert;

  await axios
    .get(`https://jsonplaceholder.typicode.com/todos/${result}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      status.value = error.response.status;
    })
    .finally(() => {
      Promise.resolve(status.value);
    });
}
