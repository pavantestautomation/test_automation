import Homepage from '@onemail/Homepage';
import NewsPage from '@onemail/NewsPage';
import { Page } from 'playwright';
import SportsPage from '@onemail/SportsPage';

export default class Pages {
  private _page: Page;
  constructor(page: Page) {
    this._page = page;
  }

  get homepage(): Homepage {
    return new Homepage(this._page);
  }

  get newsPage(): NewsPage {
    return new NewsPage(this._page);
  }

  get sportsPage(): SportsPage {
    return new SportsPage(this._page);
  }
}
