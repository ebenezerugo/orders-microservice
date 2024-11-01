'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">inventory-manager documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-88219f4b72860470ad873bcb7080140d6ac991cbf4484756a780e4d042db4a8b330e3a625a710a51949cd528f0bef4a89a649c6ae6fe9c92fe7f0fc31151fead"' : 'data-bs-target="#xs-controllers-links-module-AppModule-88219f4b72860470ad873bcb7080140d6ac991cbf4484756a780e4d042db4a8b330e3a625a710a51949cd528f0bef4a89a649c6ae6fe9c92fe7f0fc31151fead"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-88219f4b72860470ad873bcb7080140d6ac991cbf4484756a780e4d042db4a8b330e3a625a710a51949cd528f0bef4a89a649c6ae6fe9c92fe7f0fc31151fead"' :
                                            'id="xs-controllers-links-module-AppModule-88219f4b72860470ad873bcb7080140d6ac991cbf4484756a780e4d042db4a8b330e3a625a710a51949cd528f0bef4a89a649c6ae6fe9c92fe7f0fc31151fead"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-88219f4b72860470ad873bcb7080140d6ac991cbf4484756a780e4d042db4a8b330e3a625a710a51949cd528f0bef4a89a649c6ae6fe9c92fe7f0fc31151fead"' : 'data-bs-target="#xs-injectables-links-module-AppModule-88219f4b72860470ad873bcb7080140d6ac991cbf4484756a780e4d042db4a8b330e3a625a710a51949cd528f0bef4a89a649c6ae6fe9c92fe7f0fc31151fead"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-88219f4b72860470ad873bcb7080140d6ac991cbf4484756a780e4d042db4a8b330e3a625a710a51949cd528f0bef4a89a649c6ae6fe9c92fe7f0fc31151fead"' :
                                        'id="xs-injectables-links-module-AppModule-88219f4b72860470ad873bcb7080140d6ac991cbf4484756a780e4d042db4a8b330e3a625a710a51949cd528f0bef4a89a649c6ae6fe9c92fe7f0fc31151fead"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-7574d9de82149cc354a58006b2d6f3330139fd9c7e056d604124b5b7cc228233c07ddcd0fe03b12d2d796f6cb4fd3eb424eee4ce54f2948f3cd29bded32e3746"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-7574d9de82149cc354a58006b2d6f3330139fd9c7e056d604124b5b7cc228233c07ddcd0fe03b12d2d796f6cb4fd3eb424eee4ce54f2948f3cd29bded32e3746"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-7574d9de82149cc354a58006b2d6f3330139fd9c7e056d604124b5b7cc228233c07ddcd0fe03b12d2d796f6cb4fd3eb424eee4ce54f2948f3cd29bded32e3746"' :
                                            'id="xs-controllers-links-module-HealthModule-7574d9de82149cc354a58006b2d6f3330139fd9c7e056d604124b5b7cc228233c07ddcd0fe03b12d2d796f6cb4fd3eb424eee4ce54f2948f3cd29bded32e3746"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrdersModule-2dcd05aeee4469e689b69321dc08a53c64dea8d0eba31cf42144b7177c871f1076cffdc92068605cc78ac87870618dab496265d37515905be48380171b2994e4"' : 'data-bs-target="#xs-controllers-links-module-OrdersModule-2dcd05aeee4469e689b69321dc08a53c64dea8d0eba31cf42144b7177c871f1076cffdc92068605cc78ac87870618dab496265d37515905be48380171b2994e4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-2dcd05aeee4469e689b69321dc08a53c64dea8d0eba31cf42144b7177c871f1076cffdc92068605cc78ac87870618dab496265d37515905be48380171b2994e4"' :
                                            'id="xs-controllers-links-module-OrdersModule-2dcd05aeee4469e689b69321dc08a53c64dea8d0eba31cf42144b7177c871f1076cffdc92068605cc78ac87870618dab496265d37515905be48380171b2994e4"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrdersModule-2dcd05aeee4469e689b69321dc08a53c64dea8d0eba31cf42144b7177c871f1076cffdc92068605cc78ac87870618dab496265d37515905be48380171b2994e4"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-2dcd05aeee4469e689b69321dc08a53c64dea8d0eba31cf42144b7177c871f1076cffdc92068605cc78ac87870618dab496265d37515905be48380171b2994e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-2dcd05aeee4469e689b69321dc08a53c64dea8d0eba31cf42144b7177c871f1076cffdc92068605cc78ac87870618dab496265d37515905be48380171b2994e4"' :
                                        'id="xs-injectables-links-module-OrdersModule-2dcd05aeee4469e689b69321dc08a53c64dea8d0eba31cf42144b7177c871f1076cffdc92068605cc78ac87870618dab496265d37515905be48380171b2994e4"' }>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TaxService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Order.html" data-type="entity-link" >Order</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessTokenExpiredException.html" data-type="entity-link" >AccessTokenExpiredException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApplicatonExistException.html" data-type="entity-link" >ApplicatonExistException</a>
                            </li>
                            <li class="link">
                                <a href="classes/Base.html" data-type="entity-link" >Base</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClassNameExtractor.html" data-type="entity-link" >ClassNameExtractor</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSchemaForSales1730363889037.html" data-type="entity-link" >CreateSchemaForSales1730363889037</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableForOrders1730365329511.html" data-type="entity-link" >CreateTableForOrders1730365329511</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomerExistException.html" data-type="entity-link" >CustomerExistException</a>
                            </li>
                            <li class="link">
                                <a href="classes/DisabledUserException.html" data-type="entity-link" >DisabledUserException</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariablesValidator.html" data-type="entity-link" >EnvironmentVariablesValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariablesValidator-1.html" data-type="entity-link" >EnvironmentVariablesValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariablesValidator-2.html" data-type="entity-link" >EnvironmentVariablesValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariablesValidator-3.html" data-type="entity-link" >EnvironmentVariablesValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileFinder.html" data-type="entity-link" >FileFinder</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForeignKeyConflictException.html" data-type="entity-link" >ForeignKeyConflictException</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenerateCharacters.html" data-type="entity-link" >GenerateCharacters</a>
                            </li>
                            <li class="link">
                                <a href="classes/HashHelper.html" data-type="entity-link" >HashHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/IntegerPrimaryIdEntity.html" data-type="entity-link" >IntegerPrimaryIdEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidCredentialsException.html" data-type="entity-link" >InvalidCredentialsException</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidCurrentPasswordException.html" data-type="entity-link" >InvalidCurrentPasswordException</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidCurrentPinException.html" data-type="entity-link" >InvalidCurrentPinException</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidTokenException.html" data-type="entity-link" >InvalidTokenException</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderMapper.html" data-type="entity-link" >OrderMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderResponseDto.html" data-type="entity-link" >OrderResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationResponseDto.html" data-type="entity-link" >PaginationResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermissionExistsException.html" data-type="entity-link" >PermissionExistsException</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenExpiredException.html" data-type="entity-link" >RefreshTokenExpiredException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseDto.html" data-type="entity-link" >ResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleExistsException.html" data-type="entity-link" >RoleExistsException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderDto.html" data-type="entity-link" >UpdateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserExistsException.html" data-type="entity-link" >UserExistsException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UuidPrimaryIdEntity.html" data-type="entity-link" >UuidPrimaryIdEntity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HttpResponseInterceptor.html" data-type="entity-link" >HttpResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IsExist.html" data-type="entity-link" >IsExist</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IsNotExist.html" data-type="entity-link" >IsNotExist</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaxService.html" data-type="entity-link" >TaxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypeOrmConfigService.html" data-type="entity-link" >TypeOrmConfigService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DefaultPagination.html" data-type="entity-link" >DefaultPagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationRequest.html" data-type="entity-link" >PaginationRequest</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});