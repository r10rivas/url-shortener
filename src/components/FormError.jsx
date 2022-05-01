const FormError = ({ error }) => {
  return (
    <>
      {
        error && (
          <p className="mt-2 text-red-400 italic">
            {error.message}
          </p>
        )
      }
    </>
  );
}

export default FormError;
