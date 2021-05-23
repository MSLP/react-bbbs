import { useRef } from 'react';
import './StoryPage.css';
import Button from '../Button/Button';
import Story from '../Story/Story';
import fullStories from '../../utils/stories';

const StoryPage = () => {
  const storyRefs = useRef([]);

  function handleScrollToStory(event) {
    storyRefs.current[event.target.id].scrollIntoView();
  }

  return (
    <section className="storypage content root__section">
      <h1 className="heading">Истории дружбы</h1>
      <p className="storypage__caption">
        Результат нашей работы сложно показать цифрами. Как измерить и&nbsp;взвесить дружбу? Как
        оценить успехи абсолютно разных детей? У&nbsp;каждой пары&nbsp;&mdash; свой результат
        и&nbsp;свои достижения. Именно об&nbsp;этом мы&nbsp;рассказываем в&nbsp;историях.
      </p>
      <div className="buttons-scroll">
        {fullStories.map((fullStory) => (
          <Button
            id={fullStory.id}
            key={fullStory.id}
            className="button button_color_black"
            type="button"
            onClick={handleScrollToStory}
          >
            {fullStory.heading}
          </Button>
        ))}
      </div>
      {fullStories.map((fullStory) => (
        <div>
          <Story
            storyRef={(el) => (storyRefs.current[fullStory.id] = el)}
            key={fullStory.id}
            fullStory={fullStory}
            isStoryPage
          />
        </div>
      ))}
    </section>
  );
};

export default StoryPage;
