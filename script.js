var base = `
<figure class="col-3@xs col-4@sm col-3@md picture-item" data-groups='["desire"]' data-date-created="2014-01-01" data-title="affair.svg">
  <div class="picture-item__inner">
<!-- <div class="aspect aspect--16x9"> -->
  <!-- <div class="aspect__inner"> -->
        <img src="img/affair.svg" srcset="img/affair.svg 1x, img/affair.svg 2x"
          alt="The Affair" />
  <!-- </div> -->
<!-- </div> -->
    <div class="picture-item__details">
      <figcaption class="picture-item__title"><a href="https://poets.org/poem/affair" target="_blank" rel="noopener">The Affair</a></figcaption>
      <p class="picture-item__tags hidden@xs">Wayne Miller</p>
    </div>
  </div>
</figure>


<figure class="col-3@xs col-4@sm col-3@md picture-item" data-groups='["birds", "flowers"]' data-date-created="2018-01-01" data-title="burn-1.svg">
  <div class="picture-item__inner">
<!-- <div class="aspect aspect--16x9"> -->
  <!-- <div class="aspect__inner"> -->
        <img src="img/burn-1.svg" srcset="img/burn-1.svg 1x, img/burn-1.svg 2x"
          alt="Burn" />
  <!-- </div> -->
<!-- </div> -->
    <div class="picture-item__details">
      <figcaption class="picture-item__title"><a href="https://poets.org/poem/burn-1" target="_blank" rel="noopener">Burn</a></figcaption>
      <p class="picture-item__tags hidden@xs">Janice N. Harrington</p>
    </div>
  </div>
</figure>


<figure class="col-6@xs col-8@sm col-6@md picture-item picture-item--overlay" data-groups='["dreams"]' data-date-created="2018-01-01" data-title="one-sweet-braid-down-she-back.svg">
  <div class="picture-item__inner">
<!-- <div class="aspect aspect--16x9"> -->
  <!-- <div class="aspect__inner"> -->
        <img src="img/one-sweet-braid-down-she-back.svg" srcset="img/one-sweet-braid-down-she-back.svg 1x, img/one-sweet-braid-down-she-back.svg 2x"
          alt="One Sweet Braid Down She Back" />
  <!-- </div> -->
<!-- </div> -->
    <div class="picture-item__details">
      <figcaption class="picture-item__title"><a href="https://poets.org/poem/one-sweet-braid-down-she-back" target="_blank" rel="noopener">One Sweet Braid Down She Back</a></figcaption>
      <p class="picture-item__tags hidden@xs">Cheryl Boyce-Taylor</p>
    </div>
  </div>
</figure>


<figure class="col-3@xs col-4@sm col-3@md picture-item" data-groups='["grief"]' data-date-created="2014-01-01" data-title="token-loss.svg">
  <div class="picture-item__inner">
<!-- <div class="aspect aspect--16x9"> -->
  <!-- <div class="aspect__inner"> -->
        <img src="img/token-loss.svg" srcset="img/token-loss.svg 1x, img/token-loss.svg 2x"
          alt="Token Loss" />
  <!-- </div> -->
<!-- </div> -->
    <div class="picture-item__details">
      <figcaption class="picture-item__title"><a href="https://poets.org/poem/token-loss" target="_blank" rel="noopener">Token Loss</a></figcaption>
      <p class="picture-item__tags hidden@xs">Kay Ryan</p>
    </div>
  </div>
</figure>


<figure class="col-3@xs col-4@sm col-3@md picture-item" data-groups='["aging", "body"]' data-date-created="2013-01-01" data-title="my-skeleton.svg">
  <div class="picture-item__inner">
<!-- <div class="aspect aspect--16x9"> -->
  <!-- <div class="aspect__inner"> -->
        <img src="img/my-skeleton.svg" srcset="img/my-skeleton.svg 1x, img/my-skeleton.svg 2x"
          alt="My Skeleton" />
  <!-- </div> -->
<!-- </div> -->
    <div class="picture-item__details">
      <figcaption class="picture-item__title"><a href="https://poets.org/poem/my-skeleton" target="_blank" rel="noopener">My Skeleton</a></figcaption>
      <p class="picture-item__tags hidden@xs">Jane Hirshfield</p>
    </div>
  </div>
</figure>


<figure class="col-3@xs col-4@sm col-3@md picture-item" data-groups='["cities"]' data-date-created="1922-01-01" data-title="citys-love.svg">
  <div class="picture-item__inner">
<!-- <div class="aspect aspect--16x9"> -->
  <!-- <div class="aspect__inner"> -->
        <img src="img/citys-love.svg" srcset="img/citys-love.svg 1x, img/citys-love.svg 2x"
          alt="The City&#039;s Love" />
  <!-- </div> -->
<!-- </div> -->
    <div class="picture-item__details">
      <figcaption class="picture-item__title"><a href="https://poets.org/poem/citys-love" target="_blank" rel="noopener">The City&#039;s Love</a></figcaption>
      <p class="picture-item__tags hidden@xs">Claude McKay</p>
    </div>
  </div>
</figure>


<figure class="col-3@xs col-4@sm col-3@md picture-item" data-groups='["childhood"]' data-date-created="2013-01-01" data-title="my-best-friends-big-sister.svg">
  <div class="picture-item__inner">
<!-- <div class="aspect aspect--16x9"> -->
  <!-- <div class="aspect__inner"> -->
        <img src="img/my-best-friends-big-sister.svg" srcset="img/my-best-friends-big-sister.svg 1x, img/my-best-friends-big-sister.svg 2x"
          alt="To My Best Friend&#039;s Big Sister" />
  <!-- </div> -->
<!-- </div> -->
    <div class="picture-item__details">
      <figcaption class="picture-item__title"><a href="https://poets.org/poem/my-best-friends-big-sister" target="_blank" rel="noopener">To My Best Friend&#039;s Big Sister</a></figcaption>
      <p class="picture-item__tags hidden@xs">Ross Gay</p>
    </div>
  </div>
</figure>


<figure class="col-3@xs col-4@sm col-3@md picture-item" data-groups='["cities"]' data-date-created="2009-01-01" data-title="how-simile-works.svg">
  <div class="picture-item__inner">
<!-- <div class="aspect aspect--16x9"> -->
  <!-- <div class="aspect__inner"> -->
        <img src="img/how-simile-works.svg" srcset="img/how-simile-works.svg 1x, img/how-simile-works.svg 2x"
          alt="How Simile Works" />
  <!-- </div> -->
<!-- </div> -->
    <div class="picture-item__details">
      <figcaption class="picture-item__title"><a href="https://poets.org/poem/how-simile-works" target="_blank" rel="noopener">How Simile Works</a></figcaption>
      <p class="picture-item__tags hidden@xs">Albert Goldbarth</p>
    </div>
  </div>
</figure>


<figure class="col-3@xs col-4@sm col-3@md picture-item" data-groups='["aging"]' data-date-created="2010-01-01" data-title="widows-gravesend.svg">
  <div class="picture-item__inner">
<!-- <div class="aspect aspect--16x9"> -->
  <!-- <div class="aspect__inner"> -->
        <img src="img/widows-gravesend.svg" srcset="img/widows-gravesend.svg 1x, img/widows-gravesend.svg 2x"
          alt="The Widows of Gravesend" />
  <!-- </div> -->
<!-- </div> -->
    <div class="picture-item__details">
      <figcaption class="picture-item__title"><a href="https://poets.org/poem/widows-gravesend" target="_blank" rel="noopener">The Widows of Gravesend</a></figcaption>
      <p class="picture-item__tags hidden@xs">L. S. Asekoff</p>
    </div>
  </div>
</figure>


`

var Shuffle = window.Shuffle;

class Demo {
  constructor(element) {
    this.element = element;
    this.shuffle = new Shuffle(element, {
      itemSelector: '.picture-item',
      sizer: element.querySelector('.my-sizer-element') });


    // Log events.
    this.addShuffleEventListeners();
    this._activeFilters = [];
    this.addFilterButtons();
    this.addSorting();
    this.addSearchFilter();
  }

  /**
     * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
     * for them like you normally would (with jQuery for example).
     */
  addShuffleEventListeners() {
    this.shuffle.on(Shuffle.EventType.LAYOUT, data => {
      console.log('layout. data:', data);
    });
    this.shuffle.on(Shuffle.EventType.REMOVED, data => {
      console.log('removed. data:', data);
    });
  }

  addFilterButtons() {
    const options = document.querySelector('.filter-options');
    if (!options) {
      return;
    }

    const filterButtons = Array.from(options.children);
    const onClick = this._handleFilterClick.bind(this);
    filterButtons.forEach(button => {
      button.addEventListener('click', onClick, false);
    });
  }

  _handleFilterClick(evt) {
    const btn = evt.currentTarget;
    const isActive = btn.classList.contains('active');
    const btnGroup = btn.getAttribute('data-group');

    this._removeActiveClassFromChildren(btn.parentNode);

    let filterGroup;
    if (isActive) {
      btn.classList.remove('active');
      filterGroup = Shuffle.ALL_ITEMS;
    } else {
      btn.classList.add('active');
      filterGroup = btnGroup;
    }

    this.shuffle.filter(filterGroup);
  }

  _removeActiveClassFromChildren(parent) {
    const { children } = parent;
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].classList.remove('active');
    }
  }

  addSorting() {
    const buttonGroup = document.querySelector('.sort-options');
    if (!buttonGroup) {
      return;
    }
    buttonGroup.addEventListener('change', this._handleSortChange.bind(this));
  }

  _handleSortChange(evt) {
    // Add and remove `active` class from buttons.
    const buttons = Array.from(evt.currentTarget.children);
    buttons.forEach(button => {
      if (button.querySelector('input').value === evt.target.value) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    // Create the sort options to give to Shuffle.
    const { value } = evt.target;
    let options = {};

    function sortByDate(element) {
      return element.getAttribute('data-created');
    }

    function sortByTitle(element) {
      return element.getAttribute('data-title').toLowerCase();
    }

    if (value === 'date-created') {
      options = {
        reverse: true,
        by: sortByDate };

    } else if (value === 'title') {
      options = {
        by: sortByTitle };

    }
    this.shuffle.sort(options);
  }

  // Advanced filtering
  addSearchFilter() {
    const searchInput = document.querySelector('.js-shuffle-search');
    if (!searchInput) {
      return;
    }
    searchInput.addEventListener('keyup', this._handleSearchKeyup.bind(this));
  }

  /**
     * Filter the shuffle instance by items with a title that matches the search input.
     * @param {Event} evt Event object.
     */
  _handleSearchKeyup(evt) {
    const searchText = evt.target.value.toLowerCase();
    this.shuffle.filter((element, shuffle) => {
      // If there is a current filter applied, ignore elements that don't match it.
      if (shuffle.group !== Shuffle.ALL_ITEMS) {
        // Get the item's groups.
        const groups = JSON.parse(element.getAttribute('data-groups'));
        const isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;
        // Only search elements in the current group
        if (!isElementInCurrentGroup) {
          return false;
        }
      }
      const titleElement = element.querySelector('.picture-item__title');
      const titleText = titleElement.textContent.toLowerCase().trim();
      return titleText.indexOf(searchText) !== -1;
    });
  }}

let scrollIndex = 0;
let poems;
$.ajax({
    url:"https://sheetdb.io/api/v1/qdgx282agjg9f",
    async: false,
    success: function(data) {
      poems = data;
    }
});


document.addEventListener('DOMContentLoaded', () => {
  window.demo = new Demo(document.getElementById('grid'));

});

var getHTML = function(arr) {
  var fig = arr.fig;
  var grp = arr.grp;
  var shortName = arr.short_name;
  var title = arr.title;
  var author = arr.author;
  var year = arr.year;

  console.log(title);

  return `<figure class="${fig}" data-groups='[${grp}]' data-date-created="${year}-01-01" data-title="${shortName}.svg">
            <div class="picture-item__inner">
                  <img src="img/${shortName}.svg" srcset="img/${shortName}.svg 1x, img/${shortName}.svg 2x"
                    alt="${title}" />
              <div class="picture-item__details">
                <figcaption class="picture-item__title"><a href="https://poets.org/poem/${shortName}" target="_blank" rel="noopener">${title}</a></figcaption>
                <p class="picture-item__tags hidden@xs">${author}</p>
              </div>
            </div>
          </figure>`;

}

var appendFour = function(num) {

  var fourHTML = '';

  var subset = poems.slice(num, num+4);
  subset.forEach(function(p) {
    fourHTML = `${fourHTML}
                ${getHTML(p)}`;
  });


  // var oldHTML = $('div#grid').html();

  base = `

            ${base}

                ${fourHTML}

                `

                console.log(fourHTML);

  $('div#grid').html(base);
  $('div#grid').css('height','auto')
  // $('div#grid').removeAttr('style');
  $('div#grid').css('position','relative');
  $('div#grid').css('overflow','hidden');
}

let didScroll = false;

$(window).scroll(function () {
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {

     // console.log(timer);
    // //
    // setTimeout(function() {

    if (didScroll == false) {


         console.log("adding")

         appendFour(scrollIndex);

         scrollIndex = scrollIndex + 4;

    }

       didScroll = true;


     }

});

setInterval(function() {
  console.log('waiting')
    if ( didScroll ) {
      console.log('done waiting')
        didScroll = false;
        // Check your page position and then
        // Load in more results
    }
}, 3000);
