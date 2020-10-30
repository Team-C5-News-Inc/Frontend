// import app component
import useNews from '../../utils/custom hooks/useNews.jsx';

describe('request.js', () => {

  it('is match snapshot newsAPI?', () => {
    expect(useNews)
      .toMatchSnapshot()
  });

});
