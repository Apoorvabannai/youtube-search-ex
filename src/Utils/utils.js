const dataTestAttribute = (component, dataTestId) => {
  const wrapper = component.find(`[data-test-id="${ dataTestId }"]`);
  return wrapper;
};

export default dataTestAttribute;
