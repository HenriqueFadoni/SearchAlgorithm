import React from 'react';

const LinearSearchExplanation: React.FC = () => (
  <>
    <p className="text-justify mx-5 mt-5">
      Linear Search is the most fundamental algorithm to obtain items in a given dataset. Imagine a list of data, ordered or not, 
      Sequential Search starts from the beginning of the collection and iterate through each item until it finds what we are looking for.
      The main problem with this algorithm begins when we have a long dataset and we are looking for the last element.
      The runtime complexity for Sequential Search is <strong>O(n)</strong>, which is a Big O notation representing the worst runtime for a given algorithm, 
      where "N" stands for the number of operations for a given search.
      Of course, we can improve this search process by adding <strong>Sort Algorithms</strong> or <strong>Self-Organizing data</strong>.
    </p>
    <p className="text-justify mx-5 mt-3 mb-5">
    In this application, you will find a clear example of how Linear Search works in a given dataset.
     And, even implement algorithms to make it faster. Thus, I expect you to comprehend its flaws and strengths. 
    </p>
  </>
);

export default LinearSearchExplanation;
