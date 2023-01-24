import { useState } from 'react';
import SingleFAQ from './SingleFAQ';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How many programmers does it take to screw in a lightbulb?',
      answer: "None, We don't address hardware issues.",
      open: false,
    },
    {
      question: 'Who is the founder of judo?',
      answer: 'Jigoro Kano',
      open: false,
    },
    {
      question: 'What does the word judo mean',
      answer: 'Judo means The Gengle Way',
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className='faqs'>
      {faqs.map((faq, i) => (
        <SingleFAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
};

export default FAQ;
