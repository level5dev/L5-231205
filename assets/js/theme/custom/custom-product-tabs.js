import _ from "lodash";
export default function ($scope) {
  const dataTabs = $("[data-its-tab]").toArray();

  let notActive = true;

  dataTabs.forEach((tab, i) => {
    const title = $(tab).data("itsTab");
    $(".tabs", $scope).append(`
            <li class="tab tab--custom tab--${_.kebabcase(title)} ${
      notActive ? "is-active" : ""
    }" role="presentation" data-accTabId="tab-ovw">
                <a class="tab-title" href="#itsTab-${i}" aria-controls="itsTab-${i}" role="tab" tabindex="0" aria-selected="false">${title}</a>
            </li>
        `);

    $(".tabs-contents", $scope).append(`
        <div data-tabcon="tab-ovw" data-accPosition="last">
            <a class="dropdown-toggle w-dropdown-toggle accordion-mobile" data-accordion="tab-ovw">
                <div class="accordion-title white">${title}</div>
                <i class="fas fa-sharp fa-chevron-down open" style="color: #ffffff;" accordion-ddown></i>
            </a>
            <div class="container tab-content tab-content--custom tab-content--${_.kebabcase(
              title
            )} ${
      notActive ? "is-active" : ""
    }" id="itsTab-${i}" aria-hidden="true" role="tabpanel" accordion-mobile-content>
                ${$(tab).html()}
            </div>
        </div>    
        `);

    if (notActive) {
      $(".tabs-wrapper .tab.tab--warranty").removeClass("is-active");
      $(".tabs-contents #tab-warranty").removeClass("is-active");
    }

    notActive = false;

    tab.remove();
  });
}
//
