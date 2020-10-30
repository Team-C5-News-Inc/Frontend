// import app component
import { categories } from '../../utils/data/categories.js';

describe('request.js', () => {

  it('is match snapshot newsAPI?', () => {
    expect(categories)
      .toMatchSnapshot()
  });

});
