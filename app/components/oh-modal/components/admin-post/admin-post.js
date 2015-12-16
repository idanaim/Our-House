export class AdminPostController {
  /*@ngInject*/
  constructor($uibModalInstance, BuildingPosts) {
    this.buildingPosts = BuildingPosts;
    this.modalInstance = $uibModalInstance;
  }

  save() {
    alert(JSON.stringify(this.post));
    this.post.buildingId='9hlOUsQd9K';
    this.post.userId='u13weUl5J2';
    this.buildingPosts.setNewPost(this.post)
    this.modalInstance.close();
  }
}
