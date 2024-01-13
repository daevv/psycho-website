const scriptUrl =
  "https://script.google.com/macros/s/AKfycbzCVt8nfcVrIwMWh6Ur0Tu9l1o78Lyig5UXtSIv7R6OsAhFnhS08Km0TgMQK6h1Y1OVIQ/exec";

const generateSubmitHandler = (setIsLoading, setIsSuccess, formRef) => (e) => {
  e.preventDefault();
  setIsLoading(true);
  fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
    .then((res) => res.json())
    .then(({ result }) => {
      console.log(result);
      formRef.current.reset();
    })
    .then((_) => {
      setIsLoading(false);
      setIsSuccess(true);
    })

    .catch((err) => console.log(err));
};

export default generateSubmitHandler;