import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Service from '@ember/service';

export default class MockAuthService extends Service {
  currentUserId = null;

  @service router;

  loginWithUserId(userId) {
    this.currentUserId = userId;
    this.router.transitionTo('teams');
  }

  @action
  logout() {
    this.currentUserId = null;
    this.router.transitionTo('login');
  }
}
