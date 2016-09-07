var NavbarView = Backbone.View.extend({
  tagName: 'nav',
  template: _.template($("#navbarTemplate").html()),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var HomeView = Backbone.View.extend({
  tagName: 'p',
  template: _.template($("#homeTemplate").html()),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var ServicesView = Backbone.View.extend({
  tagName: 'p',
  template: _.template($("#servicesTemplate").html()),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var ContactView = Backbone.View.extend({
  tagName: 'p',
  template: _.template($("#contactTemplate").html()),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var ApplicationRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'services': 'services',
    'contacts': 'contacts'
  },
  home: function(){
    var homeView = new HomeView;
    $('#main').append(homeView.render().el);
  },
  services: function(){
    var servicesView = new ServicesView;
    $('#main').append(servicesView.render().el);
  }
});

$(function(){
  var navbarView = new NavbarView;
  $('#navbar').html(navbarView.render().el);
  var applicationRouter = new ApplicationRouter
  Backbone.history.start()
});

// var navbarView = new NavbarView;
// var homeView = new HomeView;
// var servicesView = new ServicesView;
// var contactView = new ContactView;

// $('#navbar').html(navbarView.render().el);
// $('#main').append(homeView.render().el);
// $('#main').append(servicesView.render().el);
// $('#main').append(contactView.render().el);