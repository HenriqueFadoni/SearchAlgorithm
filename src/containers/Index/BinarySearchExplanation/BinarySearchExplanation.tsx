import React from 'react';

const BinarySearchExplanation: React.FC = () => (
  <>
    <p className="text-justify mx-5 mt-5">
      Binary Search is most effective when our data is sorted. This type of algorithm works like how 
      humans would search a word in the dictionary. For instance, if we are looking for the term "code", 
      we would start towards the middle of the book. And, based on whether the alphabet we land on, we decide 
      to get higher or lower. Now, Binary Search is precisely the same, which can significantly reduce the searching time.
    </p>
    <p className="text-justify mx-5 mt-3 mb-5">
      In the worst-case performance, the notation would be <strong>O (Log N)</strong>. The fascinating part is not only how 
      fast it excludes non-searching items, but also that it works for a variety of elements even though 
      they repeat.
    </p>
  </>
);

export default BinarySearchExplanation;