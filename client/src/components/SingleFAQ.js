const SingleFAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`faq ${faq.open ? 'open' : ''}`}
      onClick={() => toggleFAQ(index)}
      key={index}
    >
      <div className='faq-question'>{faq.question}</div>
      <div className='faq-answer'>{faq.answer}</div>
    </div>
  );
};

export default SingleFAQ;
