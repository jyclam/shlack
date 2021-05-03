import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  @service auth;
  get isDisabled() {
    return !this.userId;
  }

  loginAsUserWithId(val) {
    console.log('user id: ', val);
  }

  @action
  onSelectChanged(evt) {
    this.userId = evt.target.value;
  }

  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();
    const { target } = evt;
    const val = target.querySelector('select').value;
    this.auth.loginWithUserId(val);
  }
}
