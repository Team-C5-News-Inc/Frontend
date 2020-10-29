// import app component
import { newsAPI, callNewsApi } from '../../utils/requests.js';

describe('request.js', () => {

  it('is match snapshot newsAPI?', () => {
    expect(newsAPI)
      .toMatchSnapshot()
  });

  it('is match snapshot callNewsApi?', () => {
    expect(callNewsApi)
      .toMatchSnapshot()
  });

  it('is match snapshot callNewsApi?', () => {
    const output = callNewsApi('random')
    expect(output).toMatchSnapshot()
  });

});
