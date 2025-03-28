const PRIDE_AND_PREJUDICE = `
It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.

"My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"

Mr. Bennet replied that he had not.

"But it is," returned she; "for Mrs. Long has just been here, and she told me all about it."

Mr. Bennet made no answer.

"Do you not want to know who has taken it?" cried his wife impatiently.

"You want to tell me, and I have no objection to hearing it."

This was invitation enough.

"Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it, that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week."

"What is his name?"

"Bingley."

"Is he married or single?"

"Oh! Single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!"
`;

export function processBook() {
  // For this prototype, we'll just use the first chapter
  // In a real implementation, we would load the full text and split it into chapters
  return {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    chapters: [
      {
        title: "Chapter 1",
        content: PRIDE_AND_PREJUDICE.trim()
      },
      {
        title: "Chapter 2",
        content: "This is a placeholder for Chapter 2. In a full implementation, we would include the complete text."
      },
      {
        title: "Chapter 3",
        content: "This is a placeholder for Chapter 3. In a full implementation, we would include the complete text."
      }
    ]
  };
} 