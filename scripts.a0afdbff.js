"use strict";
String.prototype.startsWith || (String.prototype.startsWith = function (searchString, position) {
    return position = position || 0, this.indexOf(searchString, position) === position
}), angular.module("edadminApp", ["ngAnimate", "ngRoute", "ngSanitize", "ngTouch", "ngStorage", "ckeditor", "chart.js", "ui.bootstrap", "ui.bootstrap.tpls", "edadminApp.Menu", "edadminApp.Commun", "edadminApp.Login", "edadminApp.ParametragesGeneraux", "edadminApp.PageContact", "edadminApp.ParametragesFamilles", "edadminApp.ParametragesEleves", "edadminApp.ParametragesFamillesEleves", "edadminApp.ParametragesProfesseurs", "edadminApp.ParametragesEntreprises", "edadminApp.ParametragesProfesseursPersonnels", "edadminApp.ParametragesPersonnels", "edadminApp.Parametres", "edadminApp.Stats", "edadminApp.Supervision", "edadminApp.modals", "edadminApp.config", "edadminApp.httpAuthInterceptor", "edadminApp.EdCluster", "edadminApp.base64filter", "edadminApp.rangeDatesFilter", "edadminApp.nl2brFilter", "edadminApp.Utils", "edadminApp.CacheService", "edadminApp.Aides", "customColorPicker", "smart-table", "cgBusy", "duScroll", "focus-if", "ja.qr"]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "../modules/commun/main.html",
        controller: "MainCtrl",
        controllerAs: "CtrlMain",
        data: {authenticate: !1}
    }).when("/404", {templateUrl: "404.html"}).when("/403", {templateUrl: "403.html"}).when("/Aides", {
        templateUrl: "../modules/aides/aides.html",
        controller: "AideEnLigneCtrl",
        controllerAs: "AideEnLigneCtrl",
        data: {authenticate: !0}
    }).when("/about", {
        templateUrl: "../modules/commun/about.html",
        controller: "AboutCtrl",
        controllerAs: "CtrlAbout",
        data: {authenticate: !0}
    }).when("/login", {
        templateUrl: "../modules/login/login.html",
        controller: "LoginCtrl",
        controllerAs: "CtrlLogin",
        data: {authenticate: !1}
    }).when("/logout", {
        templateUrl: "modules/login/logout.html",
        controller: "LogoutCtrl",
        controllerAs: "CtrlLogout",
        data: {authenticate: !1}
    }).when("/loginExterne", {
        templateUrl: "../modules/login/loginexterne.html",
        controller: "LoginexterneCtrl",
        controllerAs: "CtrlLoginexterne",
        data: {authenticate: !1}
    }).when("/infos-admin", {
        templateUrl: "../modules/login/infos-admin.html",
        controller: "InfosAdminCtrl",
        controllerAs: "CtrlInfosAdmin",
        data: {authenticate: !0}
    }).when("/stats/site-inscription", {redirectTo: "/404"}).when("/stats/site-:typeEntity", {
        templateUrl: "../modules/stats/stats.html",
        controller: "StatsCtrl",
        controllerAs: "CtrlStats",
        data: {authenticate: !0}
    }).when("/supervision/:typeEntity", {
        templateUrl: "../modules/supervision/supervision.html",
        controller: "SupervisionCtrl",
        controllerAs: "CtrlSupervision",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/acces-sites", {
        templateUrl: "../modules/parametrages-generaux/acces-sites.html",
        controller: "AccesSitesCtrl",
        controllerAs: "CtrlAccesSites",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/messagerie", {
        templateUrl: "../modules/parametrages-generaux/messagerie.html",
        controller: "MessagerieCtrl",
        controllerAs: "CtrlMessagerie",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/motsdepasse", {
        templateUrl: "../modules/parametrages-generaux/mots-passe-utilisateurs.html",
        controller: "MotspasseUtilisateursCtrl",
        controllerAs: "CtrlMotspasseUtilisateurs",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/alertes-transferts", {
        templateUrl: "../modules/parametrages-generaux/alertes-transferts.html",
        controller: "AlertesTransfertsCtrl",
        controllerAs: "CtrlAlertesTransferts",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/mode-restreint", {
        templateUrl: "../modules/parametrages-generaux/mode-restreint.html",
        controller: "ModeRestreintCtrl",
        controllerAs: "CtrlModeRestreint",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/connecteurs", {
        templateUrl: "../modules/parametrages-generaux/connecteurs.html",
        controller: "ConnecteursCtrl",
        controllerAs: "CtrlConnecteurs",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/manuels-scolaires", {
        templateUrl: "../modules/parametrages-generaux/manuels-scolaires.html",
        controller: "ManuelsScolairesCtrl",
        controllerAs: "CtrlManuelsScolaires",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/ent", {
        templateUrl: "../modules/parametrages-generaux/ent.html",
        controller: "EntCtrl",
        controllerAs: "CtrlEnt",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/ent/administration", {
        templateUrl: "../modules/parametrages-generaux/ent-administration.html",
        controller: "EntAdministrationCtrl",
        controllerAs: "CtrlEntAdministration",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/site-preinscription", {
        templateUrl: "../modules/parametrages-generaux/site-preinscription.html",
        controller: "SitePreinscriptionsCtrl",
        controllerAs: "CtrlSitePreinscriptions",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/contact", {
        templateUrl: "../modules/parametrages-generaux/page-contact.html",
        controller: "PageContactCtrl",
        controllerAs: "CtrlPageContact",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/documents", {
        templateUrl: "../modules/parametrages-generaux/documents.html",
        controller: "DocumentsCtrl",
        controllerAs: "CtrlDocuments",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/questionnaires", {
        templateUrl: "../modules/parametrages-generaux/questionnaires.html",
        controller: "QuestionnairesCtrl",
        controllerAs: "CtrlQuestionnaires",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/reglements-en-ligne", {
        templateUrl: "../modules/parametrages-generaux/reglements-en-ligne.html",
        controller: "ReglementsEnLigneCtrl",
        controllerAs: "CtrlReglementsEnLigne",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/agenda", {
        templateUrl: "../modules/parametrages-generaux/agenda.html",
        controller: "AgendaCtrl",
        controllerAs: "CtrlAgenda",
        data: {authenticate: !0}
    }).when("/parametrages-generaux/ouipass", {
        templateUrl: "../modules/parametrages-generaux/ouipass.html",
        controller: "OuiPassCtrl",
        controllerAs: "CtrlOuiPass",
        data: {authenticate: !0}
    }).when("/parametrages-familles/administratif", {
        templateUrl: "../modules/parametrages-familles/administratif-famille.html",
        controller: "AdministratifFamilleCtrl",
        controllerAs: "CtrlAdministratifFamille",
        data: {authenticate: !0}
    }).when("/parametrages-familles/comptabilite", {
        templateUrl: "../modules/parametrages-familles/comptabilite-famille.html",
        controller: "ComptabiliteFamilleCtrl",
        controllerAs: "CtrlComptabiliteFamille",
        data: {authenticate: !0}
    }).when("/parametrages-familles/suivi-stages", {
        templateUrl: "../modules/parametrages-familles-eleves/suivi-stages-famille-eleve.html",
        controller: "SuiviStageFamillesEleveCtrl",
        controllerAs: "CtrlSuiviStageFamillesEleve",
        data: {authenticate: !0}
    }).when("/parametrages-entreprises/administratif", {
        templateUrl: "../modules/parametrages-entreprises/administratif-entreprises.html",
        controller: "AdministratifEntrepriseCtrl",
        controllerAs: "CtrlAdministratifEntreprise",
        data: {authenticate: !0}
    }).when("/parametrages-eleves/badge", {
        templateUrl: "../modules/parametrages-eleves/badge-eleve.html",
        controller: "BadgeEleveCtrl",
        controllerAs: "CtrlBadgeEleve",
        data: {authenticate: !0}
    }).when("/parametrages-eleves/suivi-stages", {
        templateUrl: "../modules/parametrages-eleves/suivi-stages-eleve.html",
        controller: "SuiviStageEleveCtrl",
        controllerAs: "CtrlSuiviStageEleve",
        data: {authenticate: !0}
    }).when("/parametrages-eleves/comptabilite", {
        templateUrl: "../modules/parametrages-eleves/comptabilite-eleve.html",
        controller: "ComptabiliteEleveCtrl",
        controllerAs: "CtrlComptabiliteEleve",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/vie-scolaire", {
        templateUrl: "../modules/parametrages-familles-eleves/viescolaire.html",
        controller: "ViescolaireFamillesElevesCtrl",
        controllerAs: "CtrlViescolaireFamillesEleves",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/eleve-journal-classe", {
        templateUrl: "../modules/parametrages-familles-eleves/journal-classe.html",
        controller: "JournalClasseFamillesElevesCtrl",
        controllerAs: "CtrlJournalClasseFamillesEleves",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/cahier-de-textes", {
        templateUrl: "../modules/parametrages-familles-eleves/cahier-textes.html",
        controller: "CdtFamillesElevesCtrl",
        controllerAs: "CtrlCdtFamillesEleves",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/emploi-du-temps", {
        templateUrl: "../modules/parametrages-familles-eleves/emploi-du-temps.html",
        controller: "EdtFamillesElevesCtrl",
        controllerAs: "CtrlEdtFamillesEleves",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/eleve-carnet-correspondance", {
        templateUrl: "../modules/parametrages-familles-eleves/carnet-correspondance.html",
        controller: "CarnetCorrespondanceFamillesElevesCtrl",
        controllerAs: "CtrlCarnetCorrespondanceFamillesEleves",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/notes", {
        templateUrl: "../modules/parametrages-familles-eleves/notes.html",
        controller: "NotesFamillesElevesCtrl",
        controllerAs: "CtrlNotesFamillesEleves",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/livrets-competences", {
        templateUrl: "../modules/parametrages-familles-eleves/lsun-competences.html",
        controller: "LSUNCompetencesFamillesElevesCtrl",
        controllerAs: "CtrlLSUNCompetencesFamillesEleves",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/moyennes", {
        templateUrl: "../modules/parametrages-familles-eleves/moyennes.html",
        controller: "MoyennesFamillesElevesCtrl",
        controllerAs: "CtrlMoyennesFamillesEleves",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/appreciations", {
        templateUrl: "../modules/parametrages-familles-eleves/appreciations.html",
        controller: "AppreciationsFamillesElevesCtrl",
        controllerAs: "CtrlAppreciationsFamillesEleves",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/notes-periodes", {
        templateUrl: "../modules/parametrages-familles-eleves/notes-periodes.html",
        controller: "NotesPeriodesFamillesElevesCtrl",
        controllerAs: "CtrlNotesPeriodesFamillesEleves",
        data: {authenticate: !0}
    }).when("/parametrages-professeurs/saisie-notes", {
        templateUrl: "../modules/parametrages-professeurs/notes-professeur.html",
        controller: "NotesProfesseurCtrl",
        controllerAs: "CtrlNotesProfesseur",
        data: {authenticate: !0}
    }).when("/parametrages-professeurs/saisie-appreciations", {
        templateUrl: "../modules/parametrages-professeurs/appreciations-professeur.html",
        controller: "AppreciationsProfesseurCtrl",
        controllerAs: "CtrlAppreciationsProfesseur",
        data: {authenticate: !0}
    }).when("/parametrages-professeurs/saisie-livrets-competences", {
        templateUrl: "../modules/parametrages-professeurs/lsun-competences-professeur.html",
        controller: "LSUNCompetencesProfesseurCtrl",
        controllerAs: "CtrlLSUNCompetencesProfesseur",
        data: {authenticate: !0}
    }).when("/parametrages-professeurs/saisie-livrets-lycee-competences", {
        templateUrl: "../modules/parametrages-professeurs/lsl-competences-professeur.html",
        controller: "LSLCompetencesProfesseurCtrl",
        controllerAs: "CtrlLSLCompetencesProfesseur",
        data: {authenticate: !0}
    }).when("/parametrages-professeurs/suivi-stages", {
        templateUrl: "../modules/parametrages-professeurs/suivi-stages-professeur.html",
        controller: "SuiviStageProfesseurCtrl",
        controllerAs: "CtrlSuiviStageProfesseur",
        data: {authenticate: !0}
    }).when("/parametrages-professeurs/saisie-cahier-journal", {
        templateUrl: "../modules/parametrages-professeurs/cahier-journal-professeur.html",
        controller: "CahierJournalProfesseurCtrl",
        controllerAs: "CtrlCahierJournalProfesseur",
        data: {authenticate: !0}
    }).when("/parametrages-professeurs/saisie-cahier-de-textes", {
        templateUrl: "../modules/parametrages-professeurs/cahier-textes-professeur.html",
        controller: "CdtProfesseurCtrl",
        controllerAs: "CtrlCdtProfesseur",
        data: {authenticate: !0}
    }).when("/parametrages-professeurs/planning", {
        templateUrl: "../modules/parametrages-professeurs/emploi-du-temps-professeur.html",
        controller: "EdtProfesseurCtrl",
        controllerAs: "CtrlEdtProfesseur",
        data: {authenticate: !0}
    }).when("/parametrages-professeurs/administratif", {
        templateUrl: "../modules/parametrages-professeurs/administratif-professeur.html",
        controller: "AdministratifProfesseurCtrl",
        controllerAs: "CtrlAdministratifProfesseur",
        data: {authenticate: !0}
    }).when("/parametrages-professeurs/badge", {
        templateUrl: "../modules/parametrages-professeurs/badge-professeurs.html",
        controller: "BadgeProfesseursCtrl",
        controllerAs: "CtrlBadgeProfesseurs",
        data: {authenticate: !0}
    }).when("/parametrages-personnels/saisie-notes", {
        templateUrl: "../modules/parametrages-personnels/notes-personnel.html",
        controller: "NotesPersonnelCtrl",
        controllerAs: "CtrlNotesPersonnel",
        data: {authenticate: !0}
    }).when("/parametrages-personnels/badge", {
        templateUrl: "../modules/parametrages-personnels/badge-personnels.html",
        controller: "BadgePersonnelsCtrl",
        controllerAs: "CtrlBadgePersonnels",
        data: {authenticate: !0}
    }).when("/parametrages-personnels/planning", {
        templateUrl: "../modules/parametrages-personnels/emploi-du-temps-personnel.html",
        controller: "EdtPersonnelCtrl",
        controllerAs: "CtrlEdtPersonnel",
        data: {authenticate: !0}
    }).when("/parametrages-personnels/administratif", {
        templateUrl: "../modules/parametrages-personnels/administratif-personnels.html",
        controller: "AdministratifPersonnelCtrl",
        controllerAs: "CtrlAdministratifPersonnel",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/finances", {
        templateUrl: "../modules/parametrages-personnels-professeurs/finances.html",
        controller: "FinancesProfesseursPersonnelsCtrl",
        controllerAs: "CtrlFinancesProfesseursPersonnels",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/appel", {
        templateUrl: "../modules/parametrages-personnels-professeurs/appel.html",
        controller: "AppelProfesseursPersonnelsCtrl",
        controllerAs: "CtrlAppelProfesseursPersonnels",
        data: {authenticate: !0}
    }).when("/parametrages-:typeEntity/carnet-correspondance", {
        templateUrl: "../modules/parametrages-personnels-professeurs/carnet-correspondance.html",
        controller: "CarnetCorrespondanceProfesseursPersonnelsCtrl",
        controllerAs: "CtrlCarnetCorrespondanceProfesseursPersonnels",
        data: {authenticate: !0}
    }).otherwise({redirectTo: "/"})
}]).config(["$locationProvider", "$compileProvider", function ($locationProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(!1), $locationProvider.html5Mode(!0)
}]).config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("ProcessResponseInterceptor"), $httpProvider.interceptors.push("ProcessRequestInterceptor")
}]).value("cgBusyDefaults", {
    message: "Chargement en cours",
    backdrop: !0,
    templateUrl: "modules/commun/spiner-cgbusy.html"
}).run(["amMoment", "$rootScope", "$location", "Auth", "Settings", "CONFIG", "EdClusterService", "$uibModal", function (amMoment, $rootScope, $location, Auth, Settings, CONFIG, EdClusterService, $uibModal) {
    CKEDITOR.config.pasteFromWordRemoveFontStyles = !1, CKEDITOR.config.pasteFromWordRemoveStyles = !1, CKEDITOR.config.disableNativeSpellChecker = !1, moment.localeData("fr"), amMoment.changeLocale("fr"), $rootScope.Auth = Auth, $rootScope.settings = Settings.allSettings(), $rootScope.version = CONFIG.version, Auth.challengeBySessionStorage(), EdClusterService.updateServers().then(function (newSettings) {
        $rootScope.settings = newSettings
    }), $rootScope.$on("update-settings", function () {
        $rootScope.settings = Settings.allSettings()
    }), $rootScope.$on("nomore-server", function () {
        $uibModal.open({
            template: '<div class="jumbotron"><h1>DÃ©solÃ©</h1><p>Suite Ã  un problÃ¨me technique, nous ne sommes pas en mesure de traiter votre demande. <br/>Nous vous prions de bien vouloir rÃ©-essayer dans quelques minutes.</p></div>',
            backdrop: "static",
            keyboard: !1,
            size: "lg"
        })
    }), $rootScope.$on("$routeChangeStart", function (events, next) {
        var isAuthenticated = Auth.isAuthenticated(), needAuthenticate = !0;
        "undefined" != typeof next && "undefined" != typeof next.data && (needAuthenticate = next.data.authenticate), needAuthenticate && !isAuthenticated && ($location.path("/login"), events.preventDefault())
    })
}]), angular.module("edadminApp.Commun", ["ngStorage", "ngLodash", "duScroll"]), angular.module("edadminApp.Commun").controller("MainCtrl", ["$location", "Auth", "SynchrosEDService", function ($location, Auth, SynchrosEDService) {
    function initialize() {
        Auth.isAuthenticated() && (accueilURL = "/", SynchrosEDService.getEtatsSynchros(Auth.codeOgec()).then(function (reponse) {
            vm.moduleVS = reponse.moduleVS, vm.moduleNotes = reponse.moduleNotes, vm.moduleAdministratif = reponse.moduleAdministratif, vm.moduleComptabilite = reponse.moduleComptabilite, vm.modulePassage = reponse.modulePassage, vm.moduleEntreprise = reponse.moduleEntreprise
        })), vm.tabMessagesMaintenance = Auth.messagesMaintenance(), $location.path(accueilURL)
    }

    function getStateIcon(state) {
        return angular.isDefined(state) ? etatsSynchro[state]() : void 0
    }

    var vm = this;
    vm.initialize = initialize, vm.getStateIcon = getStateIcon;
    var accueilURL = "/login", etatsSynchro = {
        1: function () {
            return "fa fa-close infobox-error"
        }, 2: function () {
            return "fa fa-clock-o infobox-info"
        }, 3: function () {
            return "fa fa-check infobox-success"
        }, 4: function () {
            return "fa fa-warning infobox-warning"
        }, 0: function () {
            return ""
        }
    };
    initialize()
}]), angular.module("edadminApp").controller("AboutCtrl", function () {
}), angular.module("edadminApp.Menu", []).controller("MenuCtrl", function () {
    $("#side-menu").metisMenu()
}), angular.module("edadminApp.ParametragesGeneraux", ["duScroll"]).controller("AccesSitesCtrl", ["ParametresService", "lodash", "Auth", "$uibModal", "Notification", "$q", "Utils", function (ParametresService, lodash, Auth, $uibModal, Notification, $q, Utils) {
    function calculModeEte() {
        var anneeFinDeModeEte, dateFinModeEte = vm.tabParametres["Sites/DateFinModeEte"];
        vm.parametrageJJModeEte = Utils.formatMMjjFromBDD(dateFinModeEte).jour, vm.parametrageMMModeEte = Utils.formatMMjjFromBDD(dateFinModeEte).mois, dateServeurAujourdhui >= Utils.formatDateFromBDD("" + anneeScolaireDebut + dateDebutModeEte) && dateServeurAujourdhui <= Utils.formatDateFromBDD("" + anneeScolaireDebut + dateFinModeEte) ? (vm.isModeEte = !0, anneeFinDeModeEte = anneeScolaireDebut) : (vm.isModeEte = !1, anneeFinDeModeEte = anneeScolaireFin), vm.texteDateDebutModeEte = Utils.formatDateFromBDD("" + anneeFinDeModeEte + dateDebutModeEte), vm.texteDateFinModeEte = Utils.formatDateFromBDD("" + anneeFinDeModeEte + dateFinModeEte)
    }

    function calculModeEteProf() {
        var anneeFinDeModeEte, dateFinModeEte = vm.tabParametres["Sites/DateFinModeEteProf"];
        vm.parametrageJJModeEteProf = Utils.formatMMjjFromBDD(dateFinModeEte).jour, vm.parametrageMMModeEteProf = Utils.formatMMjjFromBDD(dateFinModeEte).mois, dateServeurAujourdhui >= Utils.formatDateFromBDD("" + anneeScolaireDebut + dateDebutModeEte) && dateServeurAujourdhui <= Utils.formatDateFromBDD("" + anneeScolaireDebut + dateFinModeEte) ? (vm.isModeEteProf = !0, anneeFinDeModeEte = anneeScolaireDebut) : (vm.isModeEteProf = !1, anneeFinDeModeEte = anneeScolaireFin), vm.texteDateDebutModeEteProf = Utils.formatDateFromBDD("" + anneeFinDeModeEte + dateDebutModeEte), null === vm.texteDateDebutModeEte && (vm.texteDateDebutModeEteProf = Utils.formatDateFromBDD("" + anneeScolaireDebut + dateDebutModeEte)), vm.texteDateFinModeEteProf = Utils.formatDateFromBDD("" + anneeFinDeModeEte + dateFinModeEte)
    }

    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.parametrageMultiEtabActif = vm.tabParametres["Sites/ParamÃ©trage/ParamÃ©trageParEtablissement"], calculModeEte(), calculModeEteProf()
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function changeParametrageEtablissements() {
        if (vm.parametrageMultiEtabActif) {
            var modalInstance = $uibModal.open({
                templateUrl: "../../scripts/modals/confirm-modal.template.html",
                controller: "ConfirmModalCtrl",
                size: "md",
                resolve: {
                    config: function () {
                        var config = {};
                        return config.title = "ParamÃ©trage par Ã©tablissement", config.message = '<p>ÃŠtes-vous sÃ»r de vouloir <strong> affiner le paramÃ©trage par Ã©tablissement</strong> ? </p><div class="alert alert-danger text-center">Attention Ã  partir de maintenant vous devez paramÃ©trer un Ã  un <strong>TOUS</strong> les Ã©tablissements !</div>', config.confirm = "Valider", config.cancel = "Non", config
                    }
                }
            });
            modalInstance.result.then(function () {
                Auth.updateParametrageParEtablissement(vm.parametrageMultiEtabActif), saveParams()
            }, function () {
                vm.parametrageMultiEtabActif = !1
            })
        } else vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["Sites/ParamÃ©trage/ParamÃ©trageParEtablissement"] = vm.parametrageMultiEtabActif, vm.tabParametres["Sites/DateFinModeEte"] = Utils.formatMMjjToBDD(vm.parametrageJJModeEte, vm.parametrageMMModeEte), vm.tabParametres["Sites/DateFinModeEteProf"] = Utils.formatMMjjToBDD(vm.parametrageJJModeEteProf, vm.parametrageMMModeEteProf), Auth.updateParametrageParEtablissement(vm.parametrageMultiEtabActif), Auth.updateDateFinModeEte(vm.tabParametres["Sites/DateFinModeEte"], vm.tabParametres["Sites/DateFinModeEteProf"]), calculModeEte(), calculModeEteProf(), ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    function showPreinscriptionsLinks() {
        $uibModal.open({
            templateUrl: "modules/parametrages-generaux/modales/modale-liens-preinscription.html",
            controller: "ModalePrenscriptionsLinksCtrl",
            controllerAs: "CtrlModalePreinscriptionsLinks",
            size: "lg",
            resolve: {
                etablissements: function () {
                    return vm.tabEtablissements
                }
            }
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.changeParametrageEtablissements = changeParametrageEtablissements, vm.calculModeEte = calculModeEte, vm.calculModeEteProf = calculModeEteProf, vm.showPreinscriptionsLinks = showPreinscriptionsLinks;
    var dateServeurAujourdhui = Auth.parametragesRNE("dateServeurAujourdhui");
    dateServeurAujourdhui = Utils.formatDateFromBDD(dateServeurAujourdhui);
    var anneeScolaireFin = Auth.parametragesRNE("anneeScolaireFin"),
        anneeScolaireDebut = Auth.parametragesRNE("anneeScolaireDebut"),
        dateDebutModeEte = Auth.parametragesRNE("dateDebutModeEte");
    vm.minMonthDebutModeEte = dateDebutModeEte.slice(0, 2), vm.tabFuseauxDisponibles = [{
        libelle: "Pacific/Tahiti (UTC-10)",
        code: "Pacific/Tahiti",
        ordre: 1
    }, {
        libelle: "Pacific/Marquesas (UTC-9:30)",
        code: "Pacific/Marquesas",
        ordre: 2
    }, {libelle: "Pacific/Gambier (UTC-9)", code: "Pacific/Gambier", ordre: 3}, {
        libelle: "America/Guadeloupe (UTC-4)",
        code: "America/Guadeloupe",
        ordre: 4
    }, {
        libelle: "America/Martinique (UTC-4)",
        code: "America/Martinique",
        ordre: 5
    }, {libelle: "America/Cayenne (UTC-3)", code: "America/Cayenne", ordre: 6}, {
        libelle: "Africa/Casablanca (UTC+0)",
        code: "Africa/Casablanca",
        ordre: 7
    }, {libelle: "Africa/Dakar (UTC+0)", code: "Africa/Dakar", ordre: 8}, {
        libelle: "Europe/Paris (UTC+1)",
        code: "Europe/Paris",
        ordre: 9
    }, {
        libelle: "Indian/Reunion (UTC+4)",
        code: "Indian/Reunion",
        ordre: 10
    }], vm.disabledForm = !0, vm.codeOgec = Auth.codeOgec(), vm.tabEtablissements = Auth.etablissements(), vm.dicoParams = [{libelle: "Sites/Familles/Actif"}, {libelle: "Sites/ElÃ¨ves/Actif"}, {libelle: "Sites/Professeurs/Actif"}, {libelle: "Sites/Personnels/Actif"}, {libelle: "Sites/Entreprises/Actif"}, {libelle: "Sites/Inscriptions/Actif"}, {libelle: "Sites/ParamÃ©trage/ParamÃ©trageParEtablissement"}, {libelle: "Sites/ParamÃ©trage/AssociationComptes"}, {libelle: "Sites/DateFinModeEte"}, {libelle: "Sites/DateFinModeEteProf"}, {libelle: "Sites/CharteUtilisation/Actif"}, {libelle: "Sites/CharteUtilisation/Contenu"}, {libelle: "Sites/FuseauHoraire"}], vm.tabParametres = {}, initialize()
}]).controller("ModalePrenscriptionsLinksCtrl", ["etablissements", function (etablissements) {
    var vm = this;
    vm.tabEtablissements = etablissements
}]), angular.module("edadminApp.Commun").service("Notification", ["$location", function ($location) {
    return PNotify.prototype.options.delay = 4e3, {
        notify: function (titre, message, typeDeMessage, icon, onLeft) {
            var opts = {
                title: titre,
                text: message,
                type: typeDeMessage,
                icon: icon,
                nonblock: {nonblock: !0, nonblock_opacity: .2}
            };
            angular.isDefined(onLeft) && (opts.before_open = function (PNotify) {
                PNotify.get().css({top: "15px", left: "60px"})
            }), new PNotify(opts)
        }, ouinon: function (question, typeDeMessage, siOui, siNon) {
            new PNotify({
                title: "Demande de confirmation",
                text: question,
                icon: "glyphicon glyphicon-question-sign",
                hide: !1,
                confirm: {confirm: !0},
                buttons: {closer: !1, sticker: !1},
                history: {history: !1}
            }).get().on("pnotify.confirm", function () {
                siOui()
            }).on("pnotify.cancel", function () {
                siNon()
            })
        }, notifyWithAction: function (titre, message, typeDeMessage, icon, action, onLeft) {
            var opts = {
                title: titre,
                text: message,
                type: typeDeMessage,
                icon: icon,
                delay: 1e4,
                confirm: {
                    confirm: !0,
                    buttons: [{text: "consulter", addClass: "btn-primary"}, {confirm: !1, text: "fermer"}]
                },
                buttons: {
                    closer: !0,
                    closer_hover: !1,
                    sticker: !1,
                    show_on_nonblock: !0,
                    labels: {close: "Fermeture", stick: "Stick"}
                },
                hide: !1
            };
            angular.isDefined(onLeft) && (opts.before_open = function (PNotify) {
                PNotify.get().css({top: "15px", left: "60px"})
            }), new PNotify(opts).get().on("pnotify.confirm", function (e, notice) {
                if (action.split("?").length > 1) {
                    var params = {}, lAction = action.split("?")[0], lParams = action.split("?")[1];
                    params = lParams ? JSON.parse('{"' + lParams.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
                        return "" === key ? value : decodeURIComponent(value)
                    }) : {}, $location.path(lAction).search(params)
                } else $location.path(action);
                notice.remove()
            }).on("pnotify.cancel", function (e, notice) {
                notice.remove()
            })
        }, notifyOpts: function (options) {
            var opts = {title: "", text: "", type: "", icon: ""};
            opts = angular.extend(options), new PNotify(opts)
        }
    }
}]), angular.module("edadminApp.Login", ["ui.bootstrap"]).controller("LoginCtrl", ["httpAuthService", "$uibModal", "$location", "LoginService", function (httpAuthService, $uibModal, $location, LoginService) {
    function login3dSecure() {
        vm.promiseContents = LoginService.login3DSecure({
            identifiant: vm.username,
            motdepasse: vm.password
        }).then(function (user) {
            204 === user.code || 202 === user.code ? login() : vm.etape2 = !0
        }, function (error) {
            vm.errorMessage = error
        })
    }

    function login() {
        vm.promiseContents = LoginService.login(vm.username, vm.password, vm.codeSecure).then(function (user) {
            if (202 === user.code) {
                var dialog = $uibModal.open({
                    templateUrl: "modules/login/creationCompte.html",
                    controller: "CreationcompteCtrl as creationCompteCtrl",
                    resolve: {
                        user: function () {
                            return user.data
                        }
                    }
                });
                dialog.result.then(function (data) {
                    1 === data && (vm.etape2 = !1, dialog.close())
                })
            } else LoginService.showAuthentificationEtape2 = !1, httpAuthService.loginConfirmed(user.token), $location.path("/")
        }, function (error) {
            vm.errorMessage = error
        })
    }

    function recupMdp() {
        vm.errorMessage = "";
        var dialog = $uibModal.open({
            templateUrl: "modules/login/reinit-login.html",
            controller: "ReinitloginCtrl as reinitIdentifiantsAdminCtrl"
        });
        dialog.result.then(function (data) {
            1 === data && dialog.close()
        })
    }

    function refresh() {
        vm.etape2 = LoginService.showAuthentificationEtape2, vm.username = LoginService.username, vm.password = LoginService.pwd, LoginService.username = "", LoginService.pwd = ""
    }

    var vm = this;
    vm.login = login, vm.login3dSecure = login3dSecure, vm.recupMdp = recupMdp, vm.refresh = refresh, vm.etape2 = !1, vm.username = "", vm.password = "", vm.codeSecure = "", refresh()
}]), angular.module("edadminApp.Login").controller("LoginexterneCtrl", ["$routeParams", "$location", "$sessionStorage", "Auth", "$http", function ($routeParams, $location, $sessionStorage, Auth, $http) {
    var vm = this, atoken = "undefined" != typeof $routeParams.atoken ? $routeParams.atoken : "";
    vm.erreur = !1, vm.erreurMessage = "";
    var baseUrl = "loginexterne", data = {};
    return "" === atoken ? (vm.erreur = !0, void (vm.erreurMessage = "Aucun compte mentionnÃ© !")) : (data = {aToken: atoken}, void $http({
        method: "POST",
        url: baseUrl,
        data: data
    }).then(function (response) {
        var user = response.data;
        200 === user.code ? ($sessionStorage.$reset(), Auth.loginUser(user), $location.path("/")) : vm.erreur = !0
    }, function (error) {
        vm.erreur = !0, angular.isDefined(error.data) && angular.isDefined(error.data.message) && (vm.erreurMessage = error.data.message)
    }))
}]), angular.module("edadminApp").factory("checkStrengthService", function () {
    var subscribers = [], service = {
        colors: ["#F00", "#F90", "#FF0", "#9F0", "#0F0"], measureStrength: function (p) {
            if ("undefined" == typeof p) return 0;
            var _force = 0, _regex = /[$-\/:-?{-~!"^_`\[\]]/g, _lowerLetters = /[a-z]+/.test(p),
                _upperLetters = /[A-Z]+/.test(p), _numbers = /[0-9]+/.test(p), _symbols = _regex.test(p),
                _flags = [_lowerLetters, _upperLetters, _numbers, _symbols],
                _passedMatches = $.grep(_flags, function (el) {
                    return !!el
                }).length;
            return _force += 2 * p.length + (p.length >= 10 ? 1 : 0), _force += 10 * _passedMatches, _force = p.length <= 4 ? Math.min(_force, 10) : _force, _force = 1 === _passedMatches ? Math.min(_force, 10) : _force, _force = 2 === _passedMatches ? Math.min(_force, 20) : _force, _force = 3 === _passedMatches ? Math.min(_force, 40) : _force
        }, getColor: function (s) {
            var idx = 0;
            return idx = 10 >= s ? 0 : 20 >= s ? 1 : 30 >= s ? 2 : 40 >= s ? 3 : 4, {
                idx: idx + 1,
                col: this.colors[idx]
            }
        }
    };
    return service.subscribeToChange = function (fct) {
        subscribers.push(fct)
    }, service.unsubscribeToChange = function (fct) {
        delete subscribers[fct]
    }, service.notify = function (val) {
        angular.forEach(subscribers, function (sub) {
            sub(val)
        })
    }, service
}).directive("checkStrengthInput", ["checkStrengthService", function (checkStrengthService) {
    return {
        require: "ngModel", restrict: "EACM", link: function (scope, elem, attr, ngModel) {
            ngModel.$parsers.unshift(function (value) {
                var valid = checkStrengthService.getColor(checkStrengthService.measureStrength(value)).idx >= attr.niveau;
                return (angular.isUndefined(value) || "" === value) && (valid = !0), ngModel.$setValidity("niveau", valid), checkStrengthService.notify(value), valid ? value : void 0
            }), ngModel.$formatters.unshift(function (value) {
                var valid = checkStrengthService.getColor(checkStrengthService.measureStrength(value)).idx >= attr.niveau;
                return (angular.isUndefined(value) || "" === value) && (valid = !0), ngModel.$setValidity("niveau", valid), checkStrengthService.notify(value), value
            })
        }
    }
}]).directive("checkStrength", ["checkStrengthService", function (checkStrengthService) {
    return {
        replace: !1,
        restrict: "EACM",
        link: function (scope, iElement) {
            function onChange(strength) {
                if ("" === strength) iElement.css({display: "none"}); else {
                    var c = checkStrengthService.getColor(checkStrengthService.measureStrength(strength));
                    iElement.css({display: "inline"}), iElement.children("li").css({background: "#DDD"}).slice(0, c.idx).css({background: c.col})
                }
            }

            checkStrengthService.subscribeToChange(onChange), scope.$on("$destroy", function () {
                checkStrengthService.unsubscribeToChange(onChange)
            })
        },
        template: '<li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li>'
    }
}]), angular.module("edadminApp").directive("checkMinMax", function () {
    return {
        restrict: "A", require: "ngModel", link: function (scope, element, attr, ctrl) {
            var INTEGER_REGEXP = /^\-?\d+$/;
            ctrl.$validators.minMaxValidator = function (modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) return !0;
                if (INTEGER_REGEXP.test(viewValue)) {
                    var numberViewValue = Number(viewValue), min = parseInt(attr.min), max = parseInt(attr.max);
                    return numberViewValue >= min && max >= numberViewValue
                }
                return !1
            }
        }
    }
}), angular.module("edadminApp").directive("checkDateFinModeEte", ["Utils", "Auth", "moment", function (Utils, Auth, moment) {
    return {
        restrict: "A", require: "ngModel", link: function (scope, element, attr, ctrl) {
            ctrl.$validators.dateFinModeEteValidator = function (modelValue) {
                if (ctrl.$isEmpty(modelValue)) return !0;
                var parametrageJJModeEte = ctrl.$$parentForm.parametrageJJModeEte.$viewValue,
                    parametrageMMModeEte = ctrl.$$parentForm.parametrageMMModeEte.$viewValue;
                if (!ctrl.$isEmpty(parametrageJJModeEte) && !ctrl.$isEmpty(parametrageMMModeEte)) {
                    var anneeScolaireDebut = Auth.parametragesRNE("anneeScolaireDebut"),
                        stringDateToCheck = "" + anneeScolaireDebut + parametrageMMModeEte + parametrageJJModeEte;
                    if (moment(stringDateToCheck, "YYYYMMDD").isValid()) {
                        var dateToCheck = Utils.formatDateFromBDD(stringDateToCheck),
                            dateDebutModeEte = Auth.parametragesRNE("dateDebutModeEte");
                        dateDebutModeEte = Utils.formatDateFromBDD("" + anneeScolaireDebut + dateDebutModeEte);
                        var dateFinMaxModeEte = Utils.formatDateFromBDD("" + anneeScolaireDebut + attr.maxDateFinmodeete);
                        return dateToCheck >= dateDebutModeEte && dateFinMaxModeEte >= dateToCheck
                    }
                    return !1
                }
                return !0
            }
        }
    }
}]).directive("checkDateFinModeEteProf", ["Utils", "Auth", "moment", function (Utils, Auth, moment) {
    return {
        restrict: "A", require: "ngModel", link: function (scope, element, attr, ctrl) {
            ctrl.$validators.dateFinModeEteProfValidator = function (modelValue) {
                if (ctrl.$isEmpty(modelValue)) return !0;
                var parametrageJJModeEte = ctrl.$$parentForm.parametrageJJModeEteProf.$viewValue,
                    parametrageMMModeEte = ctrl.$$parentForm.parametrageMMModeEteProf.$viewValue;
                if (!ctrl.$isEmpty(parametrageJJModeEte) && !ctrl.$isEmpty(parametrageMMModeEte)) {
                    var anneeScolaireDebut = Auth.parametragesRNE("anneeScolaireDebut"),
                        stringDateToCheck = "" + anneeScolaireDebut + parametrageMMModeEte + parametrageJJModeEte;
                    if (moment(stringDateToCheck, "YYYYMMDD").isValid()) {
                        var dateToCheck = Utils.formatDateFromBDD(stringDateToCheck),
                            dateDebutModeEte = Auth.parametragesRNE("dateDebutModeEte");
                        dateDebutModeEte = Utils.formatDateFromBDD("" + anneeScolaireDebut + dateDebutModeEte);
                        var dateFinMaxModeEte = Utils.formatDateFromBDD("" + anneeScolaireDebut + attr.maxDateFinmodeete);
                        return dateToCheck >= dateDebutModeEte && dateFinMaxModeEte >= dateToCheck
                    }
                    return !1
                }
                return !0
            }
        }
    }
}]), angular.module("edadminApp.Stats", ["edadminApp.Commun", "angularMoment"]).directive("statsSites", function () {
    return {
        templateUrl: "modules/stats/stats-sites-template.html",
        restrict: "EA",
        scope: {labels: "=", series: "=", data: "=", idclass: "@", totauxConnexionByCible: "="},
        controller: "StatsSitesDirectiveCtrl",
        link: function (scope, element) {
        }
    }
}).controller("StatsSitesDirectiveCtrl", ["$scope", function ($scope) {
}]), angular.module("edadminApp.ParametragesGeneraux").directive("entGenerationEspaces", function () {
    return {
        templateUrl: "modules/parametrages-generaux/ent-generation-espaces-template.html",
        restrict: "EA",
        scope: {typeGeneration: "=", parametresSite: "=", onRefresh: "&"},
        controller: "EntGenerationEspacesDirectiveCtrl",
        link: function (scope, element) {
        }
    }
}).controller("EntGenerationEspacesDirectiveCtrl", ["$scope", "EntService", "Notification", "Auth", function ($scope, EntService, Notification, Auth) {
    function getLibelleEspace(typeGeneration) {
        return libellesGeneration[typeGeneration]
    }

    function getHelpText(typeGeneration) {
        return helpTextes[typeGeneration]
    }

    function getLibelleBoutonGeneration(typeGeneration) {
        return libellesBoutonsGenerations[typeGeneration]
    }

    function generateEspaces() {
        switch ($scope.typeGeneration) {
            case $scope.CONSTANTES.ESPACES_CLASSES:
                $scope.promiseEnt = generateClassesEnt();
                break;
            case $scope.CONSTANTES.ESPACES_SALLE_DES_PROFS:
                $scope.promiseEnt = generateSDPEnt();
                break;
            case $scope.CONSTANTES.ESPACES_EQUIPES_PEDAGOGIQUES:
                $scope.promiseEnt = generateEquipesPedagogiquesEnt()
        }
    }

    function generateSDPEnt() {
        return EntService.createENT("sdp", $scope.cloudActif, $scope.discussionActive, $scope.agendaActif).then(function (reponse) {
            222 === reponse.code ? Notification.notify('GÃ©nÃ©ration de l\'espaces de travail "Salle des profs" ', "Changement des options pour la salle des profs effectuÃ© !", "info", !0) : Notification.notify('GÃ©nÃ©ration de l\'espaces de travail "Salle des profs" ', "La salle des prof a bien Ã©tÃ© crÃ©Ã©e !", "success", !0), $scope.onRefresh()
        }, function (error) {
            angular.isDefined(error.data.message) ? Notification.notify('GÃ©nÃ©ration de l\'espaces de travail "Salle des profs" ', error.data.message, "error", !0) : Notification.notify('GÃ©nÃ©ration de l\'espaces de travail "Salle des profs" ', "Une erreur inattendue (code " + error.data.code + ") s'est produite", "error", !0), vm.disabledBtnEntSDP = !1
        })
    }

    function generateClassesEnt() {
        return EntService.createENT("classe", $scope.cloudActif, $scope.discussionActive, $scope.agendaActif, $scope.droitsMembres).then(function (reponse) {
            222 === reponse.code ? Notification.notify('GÃ©nÃ©ration des espaces de travail "Classes" ', "Changement des options pour les espaces de travail des classes effectuÃ© !", "info", !0) : Notification.notify('GÃ©nÃ©ration des espaces de travail "Classes" ', "Les espaces de travail ont bien Ã©tÃ© crÃ©Ã©s !", "success", !0), $scope.disabledBtnGeneration = !1, $scope.onRefresh()
        }, function (error) {
            angular.isDefined(error.data.message) ? Notification.notify('GÃ©nÃ©ration des espaces de travail "Classes" ', error.data.message, "error", !0) : Notification.notify('GÃ©nÃ©ration des espaces de travail "Classes" ', "Une erreur inattendue (code " + error.data.code + ") s'est produite", "error", !0), $scope.disabledBtnGeneration = !1
        })
    }

    function generateEquipesPedagogiquesEnt() {
        return EntService.createENT("equipesPedagogiques", $scope.cloudActif, $scope.discussionActive, $scope.agendaActif).then(function (reponse) {
            222 === reponse.code ? Notification.notify('GÃ©nÃ©ration des espaces de travail "Ã‰quipes pÃ©dagogiques" ', "Changement des options pour les espaces de travail des Ã©quipes pÃ©dagogiques effectuÃ© !", "info", !0) : Notification.notify('GÃ©nÃ©ration des espaces de travail "Ã‰quipes pÃ©dagogiques" ', "Les espaces de travail ont bien Ã©tÃ© crÃ©Ã©s !", "success", !0), $scope.disabledBtnGeneration = !1, $scope.onRefresh()
        }, function (error) {
            angular.isDefined(error.data.message) ? Notification.notify('GÃ©nÃ©ration des espaces de travail "Ã‰quipes pÃ©dagogiques" ', error.data.message, "error", !0) : Notification.notify('GÃ©nÃ©ration des espaces de travail "Ã‰quipes pÃ©dagogiques" ', "Une erreur inattendue (code " + error.data.code + ") s'est produite", "error", !0), $scope.disabledBtnGeneration = !1
        })
    }

    $scope.generateEspaces = generateEspaces, $scope.getLibelleEspace = getLibelleEspace, $scope.getLibelleBoutonGeneration = getLibelleBoutonGeneration, $scope.getHelpText = getHelpText, $scope.authService = Auth, $scope.cloudActif = !0, $scope.discussionActive = !0, $scope.agendaActif = !0, $scope.droitsMembres = "1", $scope.disabledBtnGeneration = !1, $scope.CONSTANTES = EntService.CONSTANTES;
    var libellesGeneration = [];
    libellesGeneration[$scope.CONSTANTES.ESPACES_CLASSES] = "Espaces classes", libellesGeneration[$scope.CONSTANTES.ESPACES_EQUIPES_PEDAGOGIQUES] = "Ã‰quipes pÃ©dagogiques", libellesGeneration[$scope.CONSTANTES.ESPACES_SALLE_DES_PROFS] = "Salle des profs";
    var libellesBoutonsGenerations = [];
    libellesBoutonsGenerations[$scope.CONSTANTES.ESPACES_CLASSES] = "GÃ©nÃ©rer ou mettre Ã  jour les espaces classes", libellesBoutonsGenerations[$scope.CONSTANTES.ESPACES_EQUIPES_PEDAGOGIQUES] = "GÃ©nÃ©rer ou mettre Ã  jour les espaces des Ã©quipes pÃ©dagogiques", libellesBoutonsGenerations[$scope.CONSTANTES.ESPACES_SALLE_DES_PROFS] = "GÃ©nÃ©rer ou mettre Ã  jour la salle des profs";
    var helpTextes = [],
        helpTexteEspaceClasse = "<strong>On ajoute/modifie</strong> pour chaque classe les <strong>Ã©lÃ¨ves</strong> et les <strong>professeurs</strong>.<br><br>";
    helpTexteEspaceClasse += "Les professeurs principaux seront <strong><i>administrateurs</i></strong> de l'espace.", helpTexteEspaceClasse += "<br/>", helpTexteEspaceClasse += "Les autres professeurs auront les droits d'<strong><i>ajout</i></strong>, de ", helpTexteEspaceClasse += "<strong><i>suppression</i></strong> et de <strong><i>modification</i></strong> dans le cloud et la discussion", helpTexteEspaceClasse += "<br/>Les <strong>personnels dÃ©jÃ  membres</strong> sur un espace mis Ã  jour ne seront <strong>pas modifiÃ©s</strong>";
    var helpTexteEquipesPedagogiques = "<strong>On ajoute/modifie</strong> pour chaque classe <strong>les professeurs.</strong><br><br>";
    helpTexteEquipesPedagogiques += 'Par dÃ©faut, seuls les professeurs principaux seront "<strong><i>administrateurs</i></strong>" de l\'espace.', helpTexteEquipesPedagogiques += "<br/>", helpTexteEquipesPedagogiques += "Si ce paramÃªtrage ne vous convient pas, vous devez le personnaliser en utilisant l'onglet ", helpTexteEquipesPedagogiques += '"Administration" de l\'espace concernÃ© <b>sur le site EcoleDirecte</b>.';
    var helpTexteSalleDesProfs = "<strong>On ajoute/modifie l'ensemble des professeurs.</strong><br><br>";
    helpTexteSalleDesProfs += 'Par dÃ©faut, tous les profs seront "<strong><i>administrateurs</i></strong>".', helpTexteSalleDesProfs += "<br/>", helpTexteSalleDesProfs += "Si ce paramÃªtrage ne vous convient pas, vous devez le personnaliser en utilisant l'onglet ", helpTexteSalleDesProfs += '"Administration" de la salle des profs <b>sur le site EcoleDirecte</b>.', helpTextes[$scope.CONSTANTES.ESPACES_CLASSES] = helpTexteEspaceClasse, helpTextes[$scope.CONSTANTES.ESPACES_EQUIPES_PEDAGOGIQUES] = helpTexteEquipesPedagogiques, helpTextes[$scope.CONSTANTES.ESPACES_SALLE_DES_PROFS] = helpTexteSalleDesProfs
}]), angular.module("edadminApp.Aides", ["edadminApp.Commun"]).controller("AideEnLigneCtrl", ["EDHttp", "$q", function (EDHttp, $q) {
    var vm = this, get = function () {
        var defer = $q.defer(), data = {}, baseUrl = "aidesenligne/Admin";
        return EDHttp({method: "GET", url: baseUrl, data: data, cahe: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    };
    get().then(function (data) {
        vm.aides = data
    })
}]), angular.module("edadminApp.CacheService", ["ngLodash", "angular-cache"]).factory("CacheService", ["CacheFactory", "lodash", function (CacheFactory, lodash) {
    var cacheId = "ed-cache", service = {}, cache = new CacheFactory(cacheId, {});
    return service.info = function () {
        return cache.info()
    }, service.get = function (key) {
        return cache.get(key)
    }, service.put = function (key, value) {
        return cache.put(key, value)
    }, service.removeStartWith = function (str) {
        angular.forEach(cache.keys(), function (key) {
            lodash.startsWith(key, str) && cache.remove(key)
        })
    }, service.removeMatch = function (str) {
        angular.forEach(cache.keys(), function (key) {
            key.match(str) && cache.remove(key)
        })
    }, service.remove = function (str) {
        cache.get(str) && cache.remove(str)
    }, service.destroy = function () {
        return cache.destroy()
    }, service.removeAll = function () {
        return cache.removeAll()
    }, service
}]), angular.module("edadminApp.Commun").factory("EDHttp", ["$http", "$q", "CacheService", function ($http, $q, CacheService) {
    var service = function (config) {
        var defer = $q.defer(), _config = {method: "GET", cache: !1};
        _config = angular.extend(config);
        var cached = _config.cache && "GET" === _config.method, cacheKey = _config.url;
        if (cached) {
            var cacheValue = CacheService.get(cacheKey);
            if (cacheValue) return defer.resolve(cacheValue), defer.promise
        }
        return delete _config.cache, $http(_config).then(function (response) {
            cached && CacheService.put(cacheKey, response), defer.resolve(response)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    };
    return service.get = function () {
    }, service
}]), angular.module("edadminApp.ParametragesGeneraux").controller("MessagerieCtrl", ["Auth", "ParametresService", "$uibModal", "Notification", "MessagerieService", "Utils", function (Auth, ParametresService, $uibModal, Notification, MessagerieService, Utils) {
    function initialize() {
        vm.dicoParams = [{libelle: "Messagerie/Actif"}, {libelle: "Messagerie/Etablissement_0/BlackListProf"}, {libelle: "Messagerie/Etablissement_0/NotificationEmail"}, {libelle: "Messagerie/Etablissement_0/NotificationEmailAvecContenu"}, {libelle: "Messagerie/Etablissement_0/NomENT/FamillesEleves"}, {libelle: "Messagerie/Etablissement_0/URLENT/FamillesEleves"}, {libelle: "Messagerie/Etablissement_0/NomENT/Professeurs"}, {libelle: "Messagerie/Etablissement_0/URLENT/Professeurs"}, {libelle: "Messagerie/Etablissement_0/Prof-Prof"}, {libelle: "Messagerie/Etablissement_0/Prof-Admin"}, {libelle: "Messagerie/Etablissement_0/Prof-Fam"}, {libelle: "Messagerie/Etablissement_0/Prof-Elv"}, {libelle: "Messagerie/Etablissement_0/Prof-EspTravail"}, {libelle: "Messagerie/Etablissement_0/Admin-Prof"}, {libelle: "Messagerie/Etablissement_0/Admin-Admin"}, {libelle: "Messagerie/Etablissement_0/Admin-Fam"}, {libelle: "Messagerie/Etablissement_0/Admin-Elv"}, {libelle: "Messagerie/Etablissement_0/Admin-EspTravail"}, {libelle: "Messagerie/Etablissement_0/Fam-Prof"}, {libelle: "Messagerie/Etablissement_0/Fam-Admin"}, {libelle: "Messagerie/Etablissement_0/Fam-EspTravail"}, {libelle: "Messagerie/Etablissement_0/Elv-Prof"}, {libelle: "Messagerie/Etablissement_0/Elv-Admin"}, {libelle: "Messagerie/Etablissement_0/Elv-EspTravail"}, {libelle: "Messagerie/Etablissement_0/ParentsMessagesEnfants"}, {libelle: "Messagerie/Etablissement_0/RechercheParClasse/Professeurs"}], Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Messagerie/Etablissement_" + indiceEtab + "/Prof-Prof"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/Prof-Admin"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/Prof-Fam"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/Prof-Elv"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/Prof-EspTravail"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/Fam-Prof"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/Fam-Admin"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/Fam-EspTravail"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/Elv-Prof"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/Elv-Admin"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/Elv-EspTravail"}, {libelle: "Messagerie/Etablissement_" + indiceEtab + "/ParentsMessagesEnfants"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.messagerieActive = vm.tabParametres["Messagerie/Actif"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["Messagerie/Actif"] = vm.messagerieActive, ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0, initialize()
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.codeOgec = Auth.codeOgec(), vm.modeSupervision = Auth.modeSupervision();
    var dateDebutModeEte = Auth.parametragesRNE("dateDebutModeEte");
    vm.dateDebutModeEte = Utils.formatMMjjFromBDD(dateDebutModeEte).jour + "/" + Utils.formatMMjjFromBDD(dateDebutModeEte).mois, vm.disabledForm = !0, vm.tabEtablissements = Auth.etablissements(), vm.tabParametres = {};
    var nbEtablissement = 1;
    initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("MotspasseUtilisateursCtrl", ["ParametresService", "$uibModal", "Notification", "Settings", "$sessionStorage", "$filter", "$q", "Utils", function (ParametresService, $uibModal, Notification, Settings, $sessionStorage, $filter, $q, Utils) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.allDatasLoaded = !0, vm.tabParametres = data, vm.limiteValiditeMdpActive = vm.tabParametres["Sites/ValiditeMDP/Actif"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["Sites/ValiditeMDP/Actif"] = vm.limiteValiditeMdpActive, ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    function choixReinitLogins(typeUser) {
        var longType = Utils.translateLongType(typeUser);
        "PA" !== typeUser && (longType += "s");
        var user = {typeUser: typeUser, id: 0}, configModal = {
            titreModale: "RÃ©initialisation ou expiration des identifiants de connexion <strong>" + longType + "</strong>",
            libelleFirstBtn: "RÃ©initialiser tous les identifiants de connexion",
            libelleSecondBtn: "Expirer les mots de passe",
            userCurrent: user,
            longType: longType
        };
        $uibModal.open({
            templateUrl: "modules/parametrages-generaux/modales/modale-choix-type-reinit-mdp.html",
            controller: "ModaleChoixTypeReinitCtrl",
            controllerAs: "ctrlModaleChoixTypeR",
            size: "lg",
            keyboard: !1,
            backdrop: "static",
            resolve: {
                configModal: function () {
                    return configModal
                }
            }
        })
    }

    function importIdentifiantsENTExternes(reponseXHR) {
        if (reponseXHR = angular.fromJson(reponseXHR), vm.deferFlow.resolve(), 200 === reponseXHR.code) {
            vm.isImportCSVFinished = !0;
            var compteRenduDecode = $filter("base64decode")(reponseXHR.data.compteRendu);
            "" !== compteRenduDecode ? $uibModal.open({
                templateUrl: "modules/parametrages-generaux/modales/modale-compte-rendu-import-identifiants.template.html",
                controller: "CompteRenduImportIdentifiantsCtrl",
                controllerAs: "CtrlCompteRenduImportIdentifiants",
                size: "lg",
                resolve: {
                    compteRendu: function () {
                        return compteRenduDecode
                    }
                }
            }) : Notification.notify("Import des identifiants", "Les comptes d'accÃ¨s ont bien Ã©tÃ© crÃ©Ã©s !", "success", !0)
        } else vm.isImportCSVFinished = !0, Notification.notify("Import des identifiants", "Une erreur est survenue : " + reponseXHR.message, "error", !0)
    }

    function uploadError() {
        vm.deferFlow.reject(), Notification.notify("Echec lors de l'enregistrement", "Une erreur est survenue lors du tÃ©lÃ©chargement", "error", !0), vm.isImportCSVFinished = !1
    }

    function checkExtensionsFiles(currentFile) {
        return "" === vm.entSelected.code ? (Notification.notify("Import des identifiants", "Vous n'avez pas sÃ©lectionnÃ© d'ENT  !", "warning", !0), !1) : (vm.deferFlow = $q.defer(), vm.isImportCSVFinished = !1, void (currentFile.target = configTargetFlow + "&ent=" + vm.entSelected.code))
    }

    function selectNiveauSecuriteMDP() {
        if ("1" === vm.tabParametres["Sites/NiveauMDPAutorisÃ©"]) {
            var modalInstance = $uibModal.open({
                templateUrl: "../../scripts/modals/confirm-modal.template.html",
                controller: "ConfirmModalCtrl",
                size: "md",
                resolve: {
                    config: function () {
                        var config = {};
                        return config.title = "Modification du niveau de sÃ©curitÃ© des mots de passe", config.message = '<p>ÃŠtes-vous sÃ»r de vouloir <strong> choisir ce niveau de sÃ©curitÃ©</strong> ? </p><div class="alert alert-danger text-center">Le niveau <strong>faible</strong> ne respecte pas les obligations de <a class="alert-danger underline" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article32" target="_blank">l\'article 32 du RGPD.</a></div>', config.confirm = "Oui", config.cancel = "Non", config
                    }
                }
            });
            modalInstance.result.then(function () {
                vm.paramUpdated()
            }, function () {
                vm.tabParametres["Sites/NiveauMDPAutorisÃ©"] = "2"
            })
        } else vm.paramUpdated()
    }

    function desactiverBlocageCompte() {
        if (vm.tabParametres["Sites/BlocageCompte/NbTentativesMaxAtteinte/Actif"] === !1) {
            var modalInstance = $uibModal.open({
                templateUrl: "../../scripts/modals/confirm-modal.template.html",
                controller: "ConfirmModalCtrl",
                size: "md",
                resolve: {
                    config: function () {
                        var config = {};
                        return config.title = "Blocage de compte", config.message = '<p>ÃŠtes-vous sÃ»r de vouloir <strong> dÃ©sactiver le blocage de compte</strong> ? </p><div class="alert alert-danger text-center">Permettre Ã  un utilisateur <strong>un nombre infini de tentatives</strong> ne respecte pas les obligations de <a class="alert-danger underline" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article32" target="_blank">l\'article 32 du RGPD.</a></div>', config.confirm = "Oui", config.cancel = "Non", config
                    }
                }
            });
            modalInstance.result.then(function () {
                vm.paramUpdated()
            }, function () {
                vm.tabParametres["Sites/BlocageCompte/NbTentativesMaxAtteinte/Actif"] = !0
            })
        } else vm.paramUpdated()
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.importIdentifiantsENTExternes = importIdentifiantsENTExternes, vm.uploadError = uploadError, vm.checkExtensionsFiles = checkExtensionsFiles, vm.choixReinitLogins = choixReinitLogins, vm.selectNiveauSecuriteMDP = selectNiveauSecuriteMDP, vm.desactiverBlocageCompte = desactiverBlocageCompte;
    var configTargetFlow = Settings.allSettings().apiUri + "logins/externe/import.awp?verbe=post";
    vm.deferFlow = {}, vm.disabledForm = !0, vm.allDatasLoaded = !1, vm.isImportCSVFinished = !1, vm.entSelected = {}, vm.tabEntDisponibles = [{
        libelle: "Veuillez sÃ©lectionner la clÃ© ENT de votre solution",
        code: ""
    }, {libelle: "ALMAL1", code: "ALMAL1"}, {libelle: "ATOS", code: "ATOS"}, {
        libelle: "CHAMP",
        code: "CHAMP"
    }, {libelle: "CREFI", code: "CREFI"}, {libelle: "DEMOTZ", code: "DEMOTZ"}, {
        libelle: "ELYCO",
        code: "ELYCO"
    }, {libelle: "ERMIT", code: "ERMIT"}, {libelle: "GRANC", code: "GRANC"}, {
        libelle: "HATTE",
        code: "HATTE"
    }, {libelle: "ITOP", code: "ITOP"}, {libelle: "INSTSJ", code: "INSTSJ"}, {
        libelle: "ITSLEA",
        code: "ITSLEA"
    }, {libelle: "KOSMO", code: "KOSMO"}, {libelle: "MONGR", code: "MONGR"}, {
        libelle: "NDO75",
        code: "NDO75"
    }, {libelle: "O_ENT", code: "O_ENT"}, {libelle: "Ombro", code: "Ombro"}, {
        libelle: "STJDC",
        code: "STJDC"
    }, {libelle: "STNDJ", code: "STNDJ"}, {libelle: "STGAB", code: "STGAB"}, {
        libelle: "STMAR",
        code: "STMAR"
    }, {libelle: "VINCE", code: "VINCE"}, {
        libelle: "TTICE",
        code: "TTICE"
    }], vm.dicoParams = [{libelle: "Sites/NiveauMDPAutorisÃ©"}, {libelle: "Sites/MDPPerduSMS"}, {libelle: "Sites/Notification/Connexion/Actif"}, {libelle: "Sites/Notification/Connexion/Auth2FactorFE/Actif"}, {libelle: "Autorisations/SMS"}, {libelle: "Sites/Admin/3DSecure/Actif"}, {libelle: "Sites/ValiditeMDP/Actif"}, {libelle: "Sites/ValiditeMDP/NbJours"}, {libelle: "Sites/BlocageCompte/NbTentativesMaxAtteinte/Actif"}], vm.tabParametres = {}, vm.limiteValiditeMdpActive = !1, vm.importCsvFlowConfig = {
        target: function (file) {
            return file.target
        },
        chunkSize: 1073741824,
        testChunks: !1,
        query: {data: JSON.stringify({token: $sessionStorage.token})},
        singleFile: !0,
        allowDuplicateUploads: !0
    }, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("CompteRenduImportIdentifiantsCtrl", ["compteRendu", function (compteRendu) {
    var vm = this;
    vm.compteRendu = compteRendu
}]), angular.module("edadminApp.ParametragesGeneraux").controller("ModaleChoixTypeReinitCtrl", ["$uibModal", "$uibModalInstance", "IdentifiantsUtilisateursService", "Notification", "Utils", "configModal", function ($uibModal, $uibModalInstance, IdentifiantsUtilisateursService, Notification, Utils, configModal) {
    function initialize() {
        vm.configModal.userCurrent.id > 0 && (vm.myPromise = IdentifiantsUtilisateursService.getUserBlockingState(vm.configModal.userCurrent.profil, vm.configModal.userCurrent.id).then(function (response) {
            vm.isCompteBloque = response.data.isBloque === !0
        }, function () {
            Notification.notify("RÃ©cupÃ©ration du statut", "Impossible de rÃ©cupÃ©rer le statut de blocage du login", "error", !0)
        }))
    }

    function unblockLogin() {
        vm.myPromise = IdentifiantsUtilisateursService.unblockUser(vm.configModal.userCurrent.profil, vm.configModal.userCurrent.id).then(function () {
            Notification.notify("DÃ©blocage de l'utilisateur", "Le compte EcoleDirecte a Ã©tÃ© dÃ©bloquÃ© avec succÃ¨s. Mise Ã  jour des identifiants de connexions recommandÃ©e.", "success", !0), $uibModalInstance.close("unblock")
        }, function () {
            Notification.notify("DÃ©blocage de l'utilisateur", "DÃ©blocage du compte impossible", "error", !0)
        })
    }

    function reinitLogins() {
        var msgConfirmReinit = '<p>ÃŠtes-vous sÃ»r de vouloir <strong> rÃ©initialiser tous les identifiants de connexion</strong> "<span class="typeUser-reinit">' + vm.configModal.longType + '</span>" ? </p>';
        msgConfirmReinit += '<div class="alert alert-danger text-center">Attention cette action va rÃ©initialiser tous les <strong>identifiant</strong> et <strong>mots de passe</strong', msgConfirmReinit += " <br><br> des <strong>" + vm.configModal.longType + "</strong>", msgConfirmReinit += " sur EcoleDirecte, et supprimer leurs <br> associations de comptes !</div>", configModal.userCurrent.id > 0 && (msgConfirmReinit = '<p>ÃŠtes-vous sÃ»r de vouloir <strong> rÃ©initialiser les identifiants de connexion</strong> pour l\'utilisateur "<span class="typeUser-reinit">', msgConfirmReinit += vm.configModal.userCurrent.nom + " " + vm.configModal.userCurrent.prenom + '</span>" ? </p>', msgConfirmReinit += '<div class="alert alert-danger text-center">Attention cette action va rÃ©initialiser son <strong>identifiant</strong> et <strong> son mot de passe</strong> sur EcoleDirecte, et supprimer ses associations de comptes !</div>');
        var modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/prompt-validate-modal.template.html",
            controller: "PromptValidateModalCtrl",
            controllerAs: "CtrlPromptValidateModal",
            size: "md",
            resolve: {
                config: function () {
                    var config = {};
                    return config.title = "RÃ©initialisation des identifiants de connexion", config.message = msgConfirmReinit, config.messageconfirmation = "Pour confirmer votre choix", config.confirm1 = "Valider", config.cancel1 = "Non", config.confirm2 = "RÃ©initialiser", config.cancel2 = "Annuler", config
                }
            }
        });
        modalInstance.result.then(function () {
            if (configModal.userCurrent.id > 0) {
                var courtType = Utils.translateType(configModal.userCurrent.type);
                vm.myPromise = IdentifiantsUtilisateursService.reaffecteCompteOrigineED(courtType, configModal.userCurrent.id).then(function () {
                    Notification.notify("RÃ©initialisation du compte de connexion", "RÃ©initialisation du compte rÃ©ussie !", "success", !0), $uibModalInstance.close("delete")
                }, function (error) {
                    Notification.notify("RÃ©initialisation du compte de connexion", "Une erreur est survenue lors de la rÃ©initialisation.", "error", !0)
                })
            } else vm.myPromise = IdentifiantsUtilisateursService.reinitLogins(vm.typeUserReinit).then(function () {
                Notification.notify("RÃ©initialisation des identifiants de connexion", "RÃ©initialisation des identifiants rÃ©ussie !", "success", !0), $uibModalInstance.close()
            }, function (error) {
                Notification.notify("RÃ©initialisation des identifiants de connexion", "Une erreur est survenue lors de la rÃ©initialisation.", "error", !0)
            })
        })
    }

    function demandeChangementMdp() {
        var msgConfirmChangementMdp = '<p>ÃŠtes-vous sÃ»r de vouloir <strong> demander le changement de mot de passe pour tous les comptes</strong> "<span class="typeUser-reinit">' + vm.configModal.longType + '</span>" ? </p>';
        msgConfirmChangementMdp += '<div class="alert alert-danger text-center">Attention cette action va <strong>afficher un message</strong> aux <strong>' + vm.configModal.longType + "</strong> lors de leurs <br> connexions", msgConfirmChangementMdp += " et les <strong>rediriger</strong> sur la page de <strong>changement de mot de passe.</strong> <br> Tant qu'ils ne modifient pas leur mot de passe</strong> !</div>", configModal.userCurrent.id > 0 && (msgConfirmChangementMdp = "<p>ÃŠtes-vous sÃ»r de vouloir <strong> demander le changement de mot de passe pour l'utilisateur </strong>", msgConfirmChangementMdp += '<span class="typeUser-reinit">' + vm.configModal.userCurrent.nom + " " + vm.configModal.userCurrent.prenom + "</span> ? </p>", msgConfirmChangementMdp += '<div class="alert alert-danger text-center">Attention cette action va lui <strong>afficher un message</strong> lors de sa <br> connexion', msgConfirmChangementMdp += " et le <strong>rediriger</strong> sur la page de <strong>changement de mot de passe.</strong> <br> Tant qu'il ne modifie pas son mot de passe !</div>");
        var modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/prompt-validate-modal.template.html",
            controller: "PromptValidateModalCtrl",
            controllerAs: "CtrlPromptValidateModal",
            size: "md",
            resolve: {
                config: function () {
                    var config = {};
                    return config.title = "Demande de changement de mot de passe", config.message = msgConfirmChangementMdp, config.messageconfirmation = "Pour confirmer votre choix", config.confirm1 = "Valider", config.cancel1 = "Non", config.confirm2 = "Demander le changement", config.cancel2 = "Annuler", config
                }
            }
        });
        modalInstance.result.then(function () {
            if (configModal.userCurrent.id > 0) {
                var courtType = Utils.translateType(configModal.userCurrent.type);
                vm.myPromise = IdentifiantsUtilisateursService.forceUpdateMdpLogin(courtType, configModal.userCurrent.id).then(function () {
                    Notification.notify("Demande de changement de mot de passe", "Demande de changement de mot de passe rÃ©ussie !", "success", !0), $uibModalInstance.close()
                }, function (error) {
                    Notification.notify("Demande de changement de mot de passe", "Une erreur est survenue lors de la demande de changement de mot de passe.", "error", !0)
                })
            } else vm.myPromise = IdentifiantsUtilisateursService.forceUpdateMdpForLogins(vm.typeUserReinit).then(function () {
                Notification.notify("Demande de changement de mot de passe", "Demande de changement de mot de passe rÃ©ussie !", "success", !0), $uibModalInstance.close()
            }, function (error) {
                Notification.notify("Demande de changement de mot de passe", "Une erreur est survenue lors de la demande de changement de mot de passe.", "error", !0)
            })
        })
    }

    var vm = this;
    vm.reinitLogins = reinitLogins, vm.demandeChangementMdp = demandeChangementMdp, vm.unblockLogin = unblockLogin, vm.initialize = initialize, vm.configModal = configModal, vm.typeUserReinit = configModal.userCurrent.typeUser, vm.isCompteBloque = !1, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("ModaleQRCodeCtrl", ["$uibModal", "$uibModalInstance", "Utils", "configModal", function ($uibModal, $uibModalInstance, Utils, configModal) {
    var vm = this;
    vm.configModal = configModal
}]), angular.module("edadminApp.ParametragesGeneraux").controller("ModaleParametrageConnecteurCtrl", ["$uibModal", "$uibModalInstance", "$q", "$http", "Notification", "moment", "ConnecteursService", "Utils", "configModal", "lodash", "ParametresService", "Auth", function ($uibModal, $uibModalInstance, $q, $http, Notification, moment, ConnecteursService, Utils, configModal, lodash, ParametresService, Auth) {
    function toggleClasseAffectation(idEtablissement, idClasse) {
        Array.isArray(vm.affectationClassesConnecteur[idEtablissement]) || (vm.affectationClassesConnecteur[idEtablissement] = []);
        var idxAffectation = vm.affectationClassesConnecteur[idEtablissement].indexOf(idClasse);
        -1 === idxAffectation ? vm.affectationClassesConnecteur[idEtablissement].push(+idClasse) : vm.affectationClassesConnecteur[idEtablissement].splice(idxAffectation, 1)
    }

    function isClasseAffected(idEtablissement, idClasse) {
        return Array.isArray(vm.affectationClassesConnecteur[idEtablissement]) ? vm.affectationClassesConnecteur[idEtablissement].indexOf(idClasse) > -1 : !1
    }

    function getClePourParametre(param, isParamMultiCible, idEtablissement, cibleCourt) {
        var cleParam;
        return angular.isUndefined(isParamMultiCible) && (isParamMultiCible = !1), angular.isUndefined(idEtablissement) && (idEtablissement = 0), angular.isUndefined(cibleCourt) && (cibleCourt = ""), cleParam = angular.isDefined(vm.connecteur.formatCleParametreSpecifique) && angular.isString(vm.connecteur.formatCleParametreSpecifique[param]) && "" !== vm.connecteur.formatCleParametreSpecifique[param] ? vm.connecteur.formatCleParametreSpecifique[param] : isParamMultiCible && vm.connecteur.isActivationByCible && vm.connecteur.cibles.length > 0 ? vm.connecteur.formatCleParametreMultiCible : vm.connecteur.formatCleParametreSansCible, cleParam = cleParam.replace("%CODE%", vm.connecteur.code), cleParam = cleParam.replace("%IDETAB%", idEtablissement), cleParam = cleParam.replace("%CIBLECOURT%", cibleCourt), "" !== cibleCourt && (cleParam = cleParam.replace("%CIBLELONG%", vm.translateLongType(cibleCourt))), cleParam + param
    }

    function saveParams() {
        switch (vm.connecteur.code) {
            case"CATER":
                vm.tabParametres["Sites/Familles/ConnecteurCATER/Etablissement_0/Domaine"] = vm.domaineCater, vm.tabParametres["Sites/Familles/ConnecteurCATER/Etablissement_0/IdDossierAcia"] = vm.dossierAcia;
                break;
            case"ESIDOC":
                vm.tabParametres["Sites/Familles/ConnecteurEsidoc/Etablissement_0/NombrePortailsSupplementaires"] = vm.portailsEsidocSupplementaires.length;
                break;
            case"SCOLACONCEPT":
                vm.tabParametres["Sites/Familles/ConnecteurScolaConcept/Etablissement_0/Url"] = vm.urlScolaConcept;
                break;
            case"EDUMALIN":
                vm.tabParametres["Sites/Eleves/ConnecteurEduMalin/Etablissement_0/URL"] = vm.urlEduMalin;
                break;
            case"EDUNAO":
                vm.tabParametres["Sites/Familles/ConnecteurEdunao/Etablissement_0/Url"] = vm.urlEdunao, vm.tabParametres["Sites/Familles/ConnecteurEdunao/Etablissement_0/EdunaoAPIKey"] = vm.EdunaoAPIKey
        }
        var dicoParams = angular.extend([], vm.dicoParams), tabParams = angular.extend({}, vm.tabParametres);
        if ("ESIDOC" === vm.connecteur.code) {
            var boucleMax = vm.nombrePortailsEsidocSupplementairesOnInit >= vm.portailsEsidocSupplementaires.length ? vm.nombrePortailsEsidocSupplementairesOnInit : vm.portailsEsidocSupplementaires.length;
            if (boucleMax > 0) for (var i = 1; boucleMax >= i; i++) if (dicoParams.push({libelle: "Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Domaine"}, {libelle: "Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Libelle"}, {libelle: "Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Actif"}), vm.portailsEsidocSupplementaires[i - 1]) {
                var lindex = vm.portailsEsidocSupplementaires[i - 1].indice;
                tabParams["Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Domaine"] = vm.tabEsidocSuppsParametres["Sites/Familles/ConnecteursEsidoc_" + lindex + "/Etablissement_0/Domaine"], tabParams["Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Libelle"] = vm.tabEsidocSuppsParametres["Sites/Familles/ConnecteursEsidoc_" + lindex + "/Etablissement_0/Libelle"], tabParams["Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Actif"] = vm.tabEsidocSuppsParametres["Sites/Familles/ConnecteursEsidoc_" + lindex + "/Etablissement_0/Actif"]
            } else tabParams["Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Domaine"] = "", tabParams["Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Libelle"] = "", tabParams["Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Actif"] = ""
        }
        if (vm.connecteur.isActivationByClasse) {
            var tabEtabs = lodash.map(vm.tabEtablissements, "id");
            angular.forEach(tabEtabs, function (idEtab) {
                var tabIdsClasses = Array.isArray(vm.affectationClassesConnecteur[idEtab]) ? vm.affectationClassesConnecteur[idEtab] : [];
                tabParams[vm.getClePourParametre("Classes", !1, idEtab)] = tabIdsClasses.join(",")
            })
        }
        vm.myPromise = ParametresService.enregistrerParametres(dicoParams, tabParams).then(function () {
            "ESIDOC" === vm.connecteur.code && (vm.nombrePortailsEsidocSupplementairesOnInit = vm.portailsEsidocSupplementaires.length), vm.disabledForm = !0, $uibModalInstance.close()
        })
    }

    function initDicoParamsConnecteurEnDur() {
        switch (vm.connecteur.code) {
            case"ESIDOC":
                vm.dicoParams.push({libelle: "Sites/Familles/ConnecteurEsidoc/Etablissement_0/NombrePortailsSupplementaires"}, {libelle: "Sites/Familles/ConnecteurEsidoc/Etablissement_0/Domaine"}, {libelle: "Sites/Familles/ConnecteurEsidoc/Etablissement_0/Libelle"}, {libelle: "Sites/Familles/ConnecteurEsidoc/Etablissement_0/SSO"}, {libelle: "Sites/Familles/ConnecteurEsidoc/Etablissement_0/Actif"});
                break;
            case"CATER":
                vm.dicoParams.push({libelle: "Sites/Familles/ConnecteurCATER/Etablissement_0/Domaine"}, {libelle: "Sites/Familles/ConnecteurCATER/Etablissement_0/Actif"}, {libelle: "Sites/Familles/ConnecteurCATER/Etablissement_0/IdDossierAcia"}, {libelle: "Sites/Familles/ConnecteurCATER/Etablissement_0/ACIAService"});
                break;
            case"SCOLACONCEPT":
                vm.dicoParams.push({libelle: "Sites/Familles/ConnecteurScolaConcept/Etablissement_0/Actif"}, {libelle: "Sites/Familles/ConnecteurScolaConcept/Etablissement_0/Url"});
                break;
            case"EDUNAO":
                vm.dicoParams.push({libelle: "Sites/Familles/ConnecteurEdunao/Etablissement_0/Actif"}, {
                    libelle: "Sites/Familles/ConnecteurEdunao/Etablissement_0/Url"
                }, {libelle: "Sites/Familles/ConnecteurEdunao/Etablissement_0/EdunaoAPIKey"});
                break;
            case"ALISE":
                vm.dicoParams.push({libelle: "Sites/Familles/ConnecteurAlise/Etablissement_0/Actif"});
                break;
            case"ARD":
                vm.dicoParams.push({libelle: "Sites/Familles/ConnecteurARD/Etablissement_0/Adultes/Actif"}, {libelle: "Sites/Familles/ConnecteurARD/Etablissement_0/Familles/Actif"}, {libelle: "Sites/Familles/ConnecteurARD/Etablissement_0/Eleves/Actif"});
                break;
            case"EDUMALIN":
                vm.dicoParams.push({libelle: "Sites/Eleves/ConnecteurEduMalin/Etablissement_0/Actif"}, {libelle: "Sites/Eleves/ConnecteurEduMalin/Etablissement_0/URL"});
                break;
            case"ROBERT":
                vm.dicoParams.push({libelle: "Sites/Connecteur/RobertDicoEnLigne/Actif"});
                break;
            case"TABULEO":
                vm.dicoParams.push({libelle: "Sites/Connecteurs/TABULEO/APIKey"});
                break;
            case"ARBS":
                vm.dicoParams.push({libelle: "Sites/Connecteurs/ARBS/APIKey"})
        }
        for (var indiceEtab = 0, i = 1; i <= vm.nbEtablissement; i++) {
            switch (indiceEtab = vm.tabEtablissements[i - 1].id, vm.connecteur.code) {
                case"VOLTAIRE":
                    vm.dicoParams.push({libelle: "Sites/Connecteurs/VOLTAIRE/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/VOLTAIRE/" + indiceEtab + "/RNE"});
                    break;
                case"SACOCHE":
                    vm.dicoParams.push({libelle: "Sites/Professeurs/ConnecteurSacoche/Etablissement_" + indiceEtab + "/Actif"}, {libelle: "Sites/Professeurs/ConnecteurSacoche/Etablissement_" + indiceEtab + "/Url"});
                    break;
                case"TABULEO":
                    vm.dicoParams.push({libelle: "Sites/Connecteurs/TABULEO/Etablissement_" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/TABULEO/" + indiceEtab + "/RNE"});
                    break;
                case"ARBS":
                    vm.dicoParams.push({libelle: "Sites/Connecteurs/ARBS/Etablissement_" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/ARBS/" + indiceEtab + "/RNE"})
            }
            if (0 !== vm.tabEtablissements[i - 1].RNE && "" !== vm.tabEtablissements[i - 1].RNE) switch (vm.connecteur.code) {
                case"ONISEP":
                    vm.dicoParams.push({libelle: "Sites/Eleves/ConnecteurONISEPServices/" + vm.tabEtablissements[i - 1].RNE + "/Actif"});
                    break;
                case"VOLTAIRE":
                    vm.dicoParams.push({libelle: "Sites/Connecteurs/VOLTAIRE/" + vm.tabEtablissements[i - 1].RNE + "/Tested"});
                    break;
                case"SACOCHE":
                    vm.dicoParams.push({libelle: "Sites/Professeurs/ConnecteurSacoche/" + vm.tabEtablissements[i - 1].RNE + "/SacocheAPIKey"});
                    break;
                case"EC":
                    vm.dicoParams.push({libelle: "Sites/Connecteurs/EC/" + vm.tabEtablissements[i - 1].RNE + "/Actif"})
            }
        }
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function initialize() {
        var defer = $q.defer();
        defer.resolve([]), vm.myPromise = (vm.connecteur.isActivationByClasse ? Auth.classes() : defer.promise).then(function (detailClassesEtabs) {
            return angular.isDefined(detailClassesEtabs) && (vm.tabClassesEtablissements = detailClassesEtabs), vm.initListParamsConnecteur(), ParametresService.listeParametres(vm.dicoParams)
        }).then(function (data) {
            if (vm.tabParametres = data, vm.connecteur.isUniversel && vm.connecteur.isActivationByClasse) angular.forEach(lodash.map(vm.tabEtablissements, "id"), function (idEtab) {
                var valIdClasses = data[vm.getClePourParametre("Classes", !1, idEtab)], tabIdClasses = [];
                "string" == typeof valIdClasses && (tabIdClasses = valIdClasses.split(",")), angular.forEach(tabIdClasses, function (idClasse) {
                    vm.toggleClasseAffectation(idEtab, idClasse)
                })
            }); else if (!vm.connecteur.isUniversel) {
                switch (vm.connecteur.code) {
                    case"CATER":
                        vm.domaineCater = vm.tabParametres["Sites/Familles/ConnecteurCATER/Etablissement_0/Domaine"];
                        break;
                    case"ACIA":
                        vm.dossierAcia = vm.tabParametres["Sites/Familles/ConnecteurCATER/Etablissement_0/IdDossierAcia"];
                        break;
                    case"SCOLACONCEPT":
                        vm.urlScolaConcept = vm.tabParametres["Sites/Familles/ConnecteurScolaConcept/Etablissement_0/Url"];
                        break;
                    case"EDUMALIN":
                        vm.urlEduMalin = vm.tabParametres["Sites/Eleves/ConnecteurEduMalin/Etablissement_0/URL"];
                        break;
                    case"EDUNAO":
                        vm.urlEdunao = vm.tabParametres["Sites/Familles/ConnecteurEdunao/Etablissement_0/Url"], vm.EdunaoAPIKey = vm.tabParametres["Sites/Familles/ConnecteurEdunao/Etablissement_0/EdunaoAPIKey"]
                }
                for (var indiceEtab = 0, i = 1; i <= vm.nbEtablissement; i++) switch (indiceEtab = vm.tabEtablissements[i - 1].id, vm.connecteur.code) {
                    case"VOLTAIRE":
                        (vm.tabParametres["Sites/Connecteurs/VOLTAIRE/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/VOLTAIRE/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/VOLTAIRE/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE);
                        break;
                    case"SACOCHE":
                        (vm.tabParametres["Sites/Professeurs/ConnecteurSacoche/Etablissement_" + indiceEtab + "/Url"] === !1 || "" === vm.tabParametres["Sites/Professeurs/ConnecteurSacoche/Etablissement_" + indiceEtab + "/Url"]) && (vm.tabParametres["Sites/Professeurs/ConnecteurSacoche/Etablissement_" + indiceEtab + "/Url"] = "sacoche.sesamath.net/sacoche/");
                        break;
                    case"TABULEO":
                        (vm.tabParametres["Sites/Connecteurs/TABULEO/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/TABULEO/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/TABULEO/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE);
                        break;
                    case"ARBS":
                        (vm.tabParametres["Sites/Connecteurs/ARBS/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/ARBS/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/ARBS/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE)
                }
                if ("ESIDOC" === vm.connecteur.code) {
                    var nombrePortails = vm.tabParametres["Sites/Familles/ConnecteurEsidoc/Etablissement_0/NombrePortailsSupplementaires"];
                    if (nombrePortails && "" !== nombrePortails && (vm.nombrePortailsEsidocSupplementairesOnInit = lodash.parseInt(nombrePortails, 10), vm.nombrePortailsEsidocSupplementairesOnInit > 0)) {
                        var dicoEsidocSuppsParams = [];
                        for (i = 1; i <= vm.nombrePortailsEsidocSupplementairesOnInit; i++) dicoEsidocSuppsParams.push({libelle: "Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Domaine"}, {libelle: "Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Libelle"}, {libelle: "Sites/Familles/ConnecteursEsidoc_" + i + "/Etablissement_0/Actif"});
                        return ParametresService.listeParametres(dicoEsidocSuppsParams)
                    }
                }
            }
            var defer = $q.defer();
            return defer.resolve(void 0), defer.promise
        }).then(function (paramsSupplementairesEsidoc) {
            if ("ESIDOC" === vm.connecteur.code && angular.isDefined(paramsSupplementairesEsidoc)) {
                vm.tabEsidocSuppsParametres = paramsSupplementairesEsidoc;
                for (var i = 1; i <= vm.nombrePortailsEsidocSupplementairesOnInit; i++) vm.portailsEsidocSupplementaires.push({indice: i})
            }
        })
    }

    function initListParamsConnecteur() {
        if (vm.dicoParams = [], !angular.isUndefined(vm.connecteur)) if (vm.connecteur.isUniversel) {
            var tabEtabs = [0];
            vm.connecteur.isActivationByEtab && (tabEtabs = lodash.map(vm.tabEtablissements, "id")), angular.forEach(tabEtabs, function (idEtab) {
                vm.connecteur.isActivationByCible && vm.connecteur.cibles.length > 0 ? angular.forEach(vm.connecteur.cibles, function (cible) {
                    vm.dicoParams.push({libelle: vm.getClePourParametre("Actif", !0, idEtab, cible)})
                }) : vm.dicoParams.push({libelle: vm.getClePourParametre("Actif", !0, idEtab)}), idEtab > 0 && vm.connecteur.isCASAuth && vm.dicoParams.push({libelle: vm.getClePourParametre("RNE", !1, idEtab)})
            }), vm.connecteur.needAPIKey && vm.dicoParams.push({libelle: vm.getClePourParametre("APIKey", !1, 0)}), vm.connecteur.isRNESpecifique && vm.dicoParams.push({libelle: vm.getClePourParametre("RNE", !1, 0)}), vm.connecteur.isActivationByClasse && (tabEtabs = lodash.map(vm.tabEtablissements, "id"), angular.forEach(tabEtabs, function (idEtab) {
                vm.dicoParams.push({libelle: vm.getClePourParametre("Classes", !1, idEtab)})
            })), angular.forEach(vm.connecteur.paramsComplementaires, function (paramComplementaire) {
                vm.dicoParams.push({libelle: vm.getClePourParametre(paramComplementaire.code, !1, 0)})
            })
        } else vm.initDicoParamsConnecteurEnDur()
    }

    function addPortail() {
        var newItemNo = moment().valueOf(), btnAjoutConnecteur = document.getElementById("btnAjoutConnecteurEsidoc");
        btnAjoutConnecteur.blur(), vm.portailsEsidocSupplementaires.push({indice: newItemNo})
    }

    function displayModalConfirmRGPD(libelleConnecteur, libelleParametrage) {
        Utils.displayModalConfirmRGPD(libelleConnecteur, libelleParametrage, vm.tabParametres).then(function (response) {
            ("desactivation" === response.etat || "accepte" === response.etat) && vm.paramUpdated()
        }, function () {
        })
    }

    function checkLicence(codeRNE) {
        return "" === codeRNE ? void Notification.notify("VÃ©rification de la licence du connecteur", "Le code RNE est incorrect !", "error", !0) : void (vm.myPromise = ConnecteursService.get(vm.connecteur.code, codeRNE).then(function (reponse) {
            var bulle = "";
            angular.isDefined(reponse.bulle) && (bulle = reponse.bulle), reponse.licenceActive ? Notification.notify("VÃ©rification de la licence du connecteur", "Vous disposez d'une licence valide ! " + bulle, "success", !0) : Notification.notify("VÃ©rification de la licence du connecteur", "Vous ne disposez pas de licence ! " + bulle, "error", !0), initialize()
        }, function (error) {
            angular.isDefined(error.data) && error.data.message ? Notification.notify("VÃ©rification de la licence du connecteur", error.data.message, "error", !0) : Notification.notify("VÃ©rification de la licence du connecteur", "Une erreur est survenue lors de l'execution du programme !", "error", !0)
        }))
    }

    function refreshEdunao() {
        var defer = $q.defer(), data = {}, baseUrl = "connecteurEdunao/refresh";
        return vm.myPromise = $http({method: "POST", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data), Notification.notify("DÃ©ploiement effectuÃ©", "L'organisation a Ã©tÃ© mise Ã  jour sur votre Moodle", "success", !0)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }

    function refreshProjetVoltaire() {
        Utils.displayModalConfirmRGPD("Projet Voltaire").then(function (response) {
            if ("accepte" === response.etat) {
                var defer = $q.defer(), data = {}, baseUrl = "connecteurVoltaire/refresh";
                return vm.myPromise = $http({method: "POST", url: baseUrl, data: data}).then(function (response) {
                    defer.resolve(response.data), Notification.notify("DÃ©ploiement effectuÃ©", "L'organisation a Ã©tÃ© mise Ã  jour sur votre Projet Voltaire", "success", !0)
                }, function (error) {
                    defer.reject(error)
                }), defer.promise
            }
        }, function () {
        })
    }

    var vm = this;
    vm.refreshEdunao = refreshEdunao, vm.refreshProjetVoltaire = refreshProjetVoltaire, vm.checkLicence = checkLicence, vm.addPortail = addPortail, vm.displayModalConfirmRGPD = displayModalConfirmRGPD, vm.paramUpdated = paramUpdated, vm.initListParamsConnecteur = initListParamsConnecteur, vm.saveParams = saveParams, vm.getClePourParametre = getClePourParametre, vm.translateLongType = Utils.translateLongType, vm.initDicoParamsConnecteurEnDur = initDicoParamsConnecteurEnDur, vm.isClasseAffected = isClasseAffected, vm.toggleClasseAffectation = toggleClasseAffectation, vm.initialize = initialize, vm.modeSupervision = Auth.modeSupervision(), vm.isCodeOgecForPrerelease = Auth.isCodeOgecForPrerelease(), vm.isCodeOgecForDevelopment = Auth.isCodeOgecForDevelopment(), vm.configModal = configModal, vm.connecteur = configModal.connecteur, vm.disabledForm = !0, vm.tabParametres = [], vm.dicoParams = [], vm.Auth = Auth, vm.tabEtablissements = Auth.etablissements(), vm.nbEtablissement = vm.tabEtablissements.length, vm.portailsEsidocSupplementaires = [], vm.nombrePortailsEsidocSupplementairesOnInit = 0, vm.tabEsidocSuppsParametres = {}, vm.affectationClassesConnecteur = {}, vm.tabClassesEtablissements = {}, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("AlertesTransfertsCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.SMSActif = vm.tabParametres["Autorisations/SMS"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.SMSActif = !1, vm.dicoParams = [{libelle: "Administrateur/Alertes/Warnings/SMS"}, {libelle: "Administrateur/Alertes/Warnings/Email"}, {libelle: "Administrateur/Alertes/Erreurs/SMS"}, {libelle: "Administrateur/Alertes/Erreurs/Email"}, {libelle: "Administrateur/Alertes/Transferts/SMS"}, {libelle: "Administrateur/Alertes/Transferts/Email"}, {libelle: "Autorisations/SMS"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("ModeRestreintCtrl", ["Auth", "ParametresService", "Notification", "Utils", function (Auth, ParametresService, Notification, Utils) {
    function initialize() {
        vm.dicoParams = [{libelle: "ModeRestreint/Actif"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Prof-Prof"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Prof-Admin"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Prof-Fam"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Prof-Elv"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Prof-EspTravail"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Admin-Prof"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Admin-Admin"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Admin-Fam"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Admin-Elv"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Admin-EspTravail"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Fam-Prof"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Fam-Admin"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Fam-EspTravail"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Elv-Prof"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Elv-Admin"}, {libelle: "ModeRestreint/Messagerie/Etablissement_0/Elv-EspTravail"}];
        for (var i = 0; i < vm.listeOfDays.length; i++) vm.dicoParams.push({libelle: "ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"}, {libelle: "ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            for (var i = 0; i < vm.listeOfDays.length; i++) {
                var date, dateFormatedArray;
                "-1" === data["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"] || data["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"] === !1 ? data["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"] = void 0 : (date = new Date, dateFormatedArray = data["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"].split(":"), date.setHours(dateFormatedArray[0], dateFormatedArray[1], 0, 0), data["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"] = date), "-1" === data["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"] || data["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"] === !1 ? data["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"] = void 0 : (date = new Date, dateFormatedArray = data["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"].split(":"), date.setHours(dateFormatedArray[0], dateFormatedArray[1], 0, 0), data["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"] = date)
            }
            vm.tabParametres = data, vm.modeRestreintActif = vm.tabParametres["ModeRestreint/Actif"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["ModeRestreint/Actif"] = vm.modeRestreintActif, vm.tabParametresToSend = angular.copy(vm.tabParametres);
        for (var i = 0; i < vm.listeOfDays.length; i++) {
            var heureMinuteDe, heureMinuteA;
            angular.isDate(vm.tabParametres["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"]) && angular.isDate(vm.tabParametres["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"]) && void 0 !== vm.tabParametres["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"] && void 0 !== vm.tabParametres["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"] ? (heureMinuteDe = vm.tabParametres["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"].getHours().toString().padStart(2, "0") + ":" + vm.tabParametres["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"].getMinutes().toString().padStart(2, "0"), heureMinuteA = vm.tabParametres["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"].getHours().toString().padStart(2, "0") + ":" + vm.tabParametres["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"].getMinutes().toString().padStart(2, "0"), vm.tabParametresToSend["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"] = heureMinuteDe, vm.tabParametresToSend["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"] = heureMinuteA) : (vm.tabParametresToSend["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_de"] = "-1", vm.tabParametresToSend["ModeRestreint/PeriodesModeNormal_" + vm.listeOfDays[i].jour + "_a"] = "-1")
        }
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametresToSend).then(function () {
            vm.disabledForm = !0, initialize()
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.codeOgec = Auth.codeOgec(), vm.modeSupervision = Auth.modeSupervision(), vm.listeOfDays = [{
        jour: "lundi",
        date: {de: "", a: ""}
    }, {jour: "mardi", date: {de: "", a: ""}}, {jour: "mercredi", date: {de: "", a: ""}}, {
        jour: "jeudi",
        date: {de: "", a: ""}
    }, {jour: "vendredi", date: {de: "", a: ""}}, {jour: "samedi", date: {de: "", a: ""}}, {
        jour: "dimanche",
        date: {de: "", a: ""}
    }];
    var dateDebutModeEte = Auth.parametragesRNE("dateDebutModeEte");
    vm.dateDebutModeEte = Utils.formatMMjjFromBDD(dateDebutModeEte).jour + "/" + Utils.formatMMjjFromBDD(dateDebutModeEte).mois, vm.disabledForm = !0, vm.tabEtablissements = Auth.etablissements(), vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("ConnecteursCtrl", ["ParametresService", "ConnecteursService", "Notification", "lodash", "moment", "$q", "$http", "Auth", "Utils", "$uibModal", function (ParametresService, ConnecteursService, Notification, lodash, moment, $q, $http, Auth, Utils, $uibModal) {
    function filterBylibelle() {
        vm.searchFilter = vm.searchFilter.trim(), "" !== vm.searchFilter && (vm.tabConnecteursDisplayed = vm.tabConnecteursDisplayed.filter(function (connecteur) {
            return connecteur.libelle.toLowerCase().includes(vm.searchFilter.toLowerCase())
        }))
    }

    function filterByCategories() {
        vm.tabConnecteursDisplayed = vm.tabConnecteursDisplayed.filter(function (connecteur) {
            return vm.tabCategoriesFilter.every(function (categorie) {
                return connecteur.categories.includes(categorie.id)
            })
        })
    }

    function filter() {
        vm.isFiltered = !0, vm.tabConnecteursDisplayed = angular.copy(vm.tabConnecteurs), vm.filterBylibelle(), vm.filterByCategories()
    }

    function toggleCategorie(categorie) {
        var idx = vm.tabCategoriesFilter.findIndex(function (c) {
            return c.id === categorie.id
        });
        idx > -1 ? vm.tabCategoriesFilter.splice(idx, 1) : vm.tabCategoriesFilter.push(categorie)
    }

    function isCategorieSelected(idCategorie) {
        return vm.tabCategoriesFilter.findIndex(function (c) {
            return c.id === idCategorie
        }) > -1
    }

    function resetFilterLibelle() {
        vm.searchFilter = ""
    }

    function resetFilter() {
        vm.resetFilterLibelle(), vm.tabCategoriesFilter = [], vm.tabConnecteursDisplayed = angular.copy(vm.tabConnecteurs), vm.isFiltered = !1
    }

    function initialize() {
        vm.myPromise = ConnecteursService.listConnecteurs().then(function (detailConnecteurs) {
            vm.tabConnecteurs = angular.copy(detailConnecteurs.connecteurs), angular.forEach(vm.tabConnecteurs, function (connecteur) {
                connecteur.isUniversel = !0
            }), vm.tabConnecteurs.push({
                code: "VOLTAIRE",
                isUniversel: !1,
                libelle: "Projet Voltaire",
                urlIcone: "https://doc1.ecoledirecte.com/logo_projet_voltaire.png",
                urlSiteConnecteur: "https://www.projet-voltaire.fr/",
                categories: []
            }, {
                code: "ESIDOC",
                isUniversel: !1,
                libelle: "Esidoc",
                urlIcone: "https://doc1.ecoledirecte.com/logo_esidoc.png",
                urlSiteConnecteur: "http://documentation.solutionsdoc.net/",
                categories: []
            }, {
                code: "CATER",
                isUniversel: !1,
                libelle: "CATER",
                urlIcone: "https://doc1.ecoledirecte.com/logo_acia.png",
                urlSiteConnecteur: "http://www.acia.fr/",
                categories: []
            }, {
                code: "SCOLACONCEPT",
                isUniversel: !1,
                libelle: "Scolaconcept",
                urlIcone: "https://doc1.ecoledirecte.com/logo_scola_concept.png",
                urlSiteConnecteur: "http://www.scolaconcept.fr",
                categories: []
            }, {
                code: "ALISE",
                isUniversel: !1,
                libelle: "Alise",
                urlIcone: "https://doc1.ecoledirecte.com/logo_alise.jpg",
                urlSiteConnecteur: "https://alise.net/",
                categories: []
            }, {
                code: "ARD",
                isUniversel: !1,
                libelle: "ARD",
                urlIcone: "https://doc1.ecoledirecte.com/logo_ard.png",
                urlSiteConnecteur: "https://www.controle-acces.fr/",
                categories: []
            }, {
                code: "EDUNAO",
                isUniversel: !1,
                libelle: "Edunao (Moodle)",
                urlIcone: "https://doc1.ecoledirecte.com/logo_edunao.png",
                urlSiteConnecteur: "http://www.edunao.com/",
                categories: []
            }, {
                code: "EDUMALIN",
                isUniversel: !1,
                libelle: "Edumalin",
                urlIcone: "https://doc1.ecoledirecte.com/logo_edumalin.png",
                urlSiteConnecteur: "https://www.edumalin.fr/jesuis-etablissement",
                categories: []
            }, {
                code: "ONISEP",
                isUniversel: !1,
                libelle: "ONISEP Services",
                urlIcone: "https://doc1.ecoledirecte.com/logo_onisep_services.png",
                urlSiteConnecteur: "https://www.onisep-services.fr/",
                categories: []
            }, {
                code: "SACOCHE",
                isUniversel: !1,
                libelle: "SACoche",
                urlIcone: "https://doc1.ecoledirecte.com/logo_sacoche.png",
                urlSiteConnecteur: "https://sacoche.sesamath.net/",
                categories: []
            }), vm.tabConnecteursDisplayed = angular.copy(vm.tabConnecteurs), vm.tabCategories = detailConnecteurs.categories, vm.arboCategories = vm.arborescenceCategories()
        })
    }

    function openParametrageConnecteur(connecteur) {
        var configModal = {connecteur: angular.copy(connecteur)};
        $uibModal.open({
            templateUrl: "modules/parametrages-generaux/modales/modale-parametrage-connecteur.html",
            controller: "ModaleParametrageConnecteurCtrl",
            controllerAs: "ctrl",
            size: "lg",
            keyboard: !1,
            backdrop: "static",
            resolve: {
                configModal: function () {
                    return configModal
                }
            }
        })
    }

    function arborescenceCategories() {
        var getCategoriesChildrens = function (idCategorieParente) {
            var tabc = vm.tabCategories.filter(function (c) {
                return c.idParent === idCategorieParente
            });
            return tabc.forEach(function (c) {
                c.tabChildren = getCategoriesChildrens(c.id), c.tabChildren.sort(function (c1, c2) {
                    return c1.tabChildren.length < c2.tabChildren.length ? -1 : c1.tabChildren.length === c2.tabChildren.length ? 0 : 1
                })
            }), tabc
        };
        return getCategoriesChildrens(0)
    }

    var vm = this;
    vm.modeSupervision = Auth.modeSupervision(), vm.isCodeOgecForPrerelease = Auth.isCodeOgecForPrerelease(), vm.isCodeOgecForDevelopment = Auth.isCodeOgecForDevelopment(), vm.filterBylibelle = filterBylibelle, vm.filterByCategories = filterByCategories, vm.toggleCategorie = toggleCategorie, vm.filter = filter, vm.resetFilter = resetFilter, vm.resetFilterLibelle = resetFilterLibelle, vm.initialize = initialize, vm.openParametrageConnecteur = openParametrageConnecteur, vm.isCategorieSelected = isCategorieSelected, vm.arborescenceCategories = arborescenceCategories, vm.tabConnecteurs = [], vm.tabConnecteursDisplayed = void 0, vm.tabCategories = [], vm.searchFilter = "", vm.tabCategoriesFilter = [], vm.isFiltered = !1, vm.arboCategories = [], initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("EntCtrl", ["ParametresService", "Auth", "EntService", "Notification", function (ParametresService, Auth, EntService, Notification) {
    function refresh() {
        vm.dicoParams = [{libelle: "Sites/ElÃ¨ves/Cloud/Etablissement_0/Actif"}, {libelle: "Sites/ElÃ¨ves/Cloud/Etablissement_0/Pads/Actif"}, {libelle: "Sites/ElÃ¨ves/Cloud/Etablissement_0/Collabora/Actif"}, {libelle: "Sites/ElÃ¨ves/Cloud/Etablissement_0/Collabora/FormatFichiers"}, {libelle: "Sites/ElÃ¨ves/Cloud/Etablissement_0/Collabora/FormatFichiers/ChoixLibre"}, {libelle: "Sites/ElÃ¨ves/Cloud/Etablissement_0/Visios/AccesElargi/Actif"}], angular.forEach(vm.tabTypesEspacesTravail, function (typeEspaceT) {
            vm.dicoParams.push({libelle: "ENT/" + typeEspaceT + "/Date/DerniereGeneration"}, {libelle: "ENT/" + typeEspaceT + "/Cloud/Actif"}, {libelle: "ENT/" + typeEspaceT + "/Discussion/Actif"}, {libelle: "ENT/" + typeEspaceT + "/Agenda/Actif"}), typeEspaceT === EntService.CONSTANTES.ESPACES_CLASSES && vm.dicoParams.push({libelle: "ENT/" + typeEspaceT + "/DroitsMembres"})
        });
        for (var nbEtablissement = vm.tabEtablissements.length, indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = vm.tabEtablissements[i].id, vm.dicoParams.push({libelle: "Sites/ElÃ¨ves/Cloud/Etablissement_" + indiceEtab + "/Quota"});
        vm.promiseLoading = ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.ENTActif = vm.tabParametres["Sites/ElÃ¨ves/Cloud/Etablissement_0/Actif"], checkActivateCreationEspaces(), initListEtabs5Go()
        })
    }

    function initListEtabs5Go() {
        vm.tabIdEtabs5Go = [];
        for (var nbEtablissement = vm.tabEtablissements.length, i = 0; nbEtablissement > i; i++) "5368709120" === vm.tabParametres["Sites/ElÃ¨ves/Cloud/Etablissement_" + vm.tabEtablissements[i].id + "/Quota"] && vm.tabIdEtabs5Go.push(vm.tabEtablissements[i].id)
    }

    function checkActivateCreationEspaces() {
        for (var indiceEtab = 0, i = 0; i < vm.tabEtablissements.length; i++) {
            if (indiceEtab = vm.tabEtablissements[i].id, "2147483648" === vm.tabParametres["Sites/ElÃ¨ves/Cloud/Etablissement_" + indiceEtab + "/Quota"] || "5368709120" === vm.tabParametres["Sites/ElÃ¨ves/Cloud/Etablissement_" + indiceEtab + "/Quota"]) return vm.activateCreationEspaces = !0, vm.disabledBtnEntClasses = !1, void (vm.disabledBtnEntSDP = !1);
            vm.activateCreationEspaces = !1, vm.disabledBtnEntClasses = !0, vm.disabledBtnEntSDP = !0
        }
    }

    function onEnt2GoClicked(event, idEtablissement) {
        return !Auth.isCodeOgecForDevelopment() && vm.tabIdEtabs5Go.indexOf(idEtablissement) > -1 && !vm.modeSupervision ? (Notification.notify("Modification paramÃ©trage E.N.T", "Afin d'activer l'option E.N.T 2 Go, merci de contacter au prÃ©alable le service commercial au <strong>09 71 005 500</strong>", "info", !0), this.tabParametres["Sites/ElÃ¨ves/Cloud/Etablissement_" + idEtablissement + "/Quota"] = "5368709120", event.preventDefault(), !1) : void vm.paramUpdated()
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0, checkActivateCreationEspaces(), initListEtabs5Go()
        })
    }

    var vm = this;
    vm.refresh = refresh, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.onEnt2GoClicked = onEnt2GoClicked, vm.disabledForm = !0, vm.activateCreationEspaces = !1, vm.tabTypesEspacesTravail = [EntService.CONSTANTES.ESPACES_CLASSES, EntService.CONSTANTES.ESPACES_SALLE_DES_PROFS, EntService.CONSTANTES.ESPACES_EQUIPES_PEDAGOGIQUES], vm.CONSTANTES = EntService.CONSTANTES, vm.modeSupervision = Auth.modeSupervision(), vm.tabEtablissements = Auth.etablissements(), vm.tabParametres = {}, vm.tabIdEtabs5Go = [], refresh()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("SitePreinscriptionsCtrl", ["ParametresService", "$filter", "Auth", function (ParametresService, $filter, Auth) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.contenuMail = $filter("base64decode")(vm.tabParametres["Sites/Inscriptions/ContenuMail"]), vm.enteteFormulaire = $filter("base64decode")(vm.tabParametres["Sites/Inscriptions/Entete"])
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["Sites/Inscriptions/ContenuMail"] = $filter("base64encode")(vm.contenuMail), vm.tabParametres["Sites/Inscriptions/Entete"] = $filter("base64encode")(vm.enteteFormulaire), ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.anneeScolaireDebut = Auth.parametragesRNE().anneeScolaireDebut, vm.anneeScolaireFin = Auth.parametragesRNE().anneeScolaireFin, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Inscriptions/Titre"}, {
        libelle: "Sites/Inscriptions/Entete",
        encoded: !0
    }, {
        libelle: "Sites/Inscriptions/ContenuMail",
        encoded: !0
    }, {libelle: "Sites/Inscriptions/Annees/n0"}, {libelle: "Sites/Inscriptions/Annees/n1"}, {libelle: "Sites/Inscriptions/Annees/n2"}, {libelle: "Sites/Inscriptions/Annees/n3"}, {libelle: "Sites/Inscriptions/RegimeObligatoire"}, {libelle: "Sites/Inscriptions/CSPObligatoire"}, {libelle: "Sites/Inscriptions/Particule"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.PageContact", ["edadminApp.Commun", "ckeditor", "flow", "ngImageEditor"]).controller("PageContactCtrl", ["ParametresService", "Auth", "$filter", "Settings", "$sessionStorage", "Notification", "TeleversementsService", function (ParametresService, Auth, $filter, Settings, $sessionStorage, Notification, TeleversementsService) {
    function initialize() {
        if (vm.dicoParams = [], Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length), vm.dicoParams.push({libelle: "Sites/Familles/PageDeGarde/Etablissement_0/NomEtablissement"}, {
            libelle: "Sites/Familles/PageDeGarde/Etablissement_0/Adresse",
            encoded: !0
        }, {libelle: "Sites/Familles/PageDeGarde/Etablissement_0/Contact"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_0/Email"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_0/Logo"}, {
            libelle: "Sites/Familles/PageDeGarde/Etablissement_0/PrÃ©sentation",
            encoded: !0
        }, {libelle: "Sites/Familles/PageDeGarde/Etablissement_0/Site"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_0/TÃ©lÃ©phone"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_0/Photo1"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_0/Photo2"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_0/Photo3"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_0/Photo4"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_0/Photo5"}), Auth.parametrageParEtablissement()) for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = vm.tabEtablissements[i].id, vm.dicoParams.push({libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/NomEtablissement"}, {
            libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Adresse",
            encoded: !0
        }, {libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Contact"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Email"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Logo"}, {
            libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/PrÃ©sentation",
            encoded: !0
        }, {libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Site"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/TÃ©lÃ©phone"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo1"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo2"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo3"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo4"}, {libelle: "Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo5"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data;
            var adresseEtab = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Adresse"];
            vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Adresse"] = $filter("base64decode")(adresseEtab);
            var textePresentationEtab = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/PrÃ©sentation"];
            if (vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/PrÃ©sentation"] = $filter("base64decode")(textePresentationEtab), vm.cheminLogo_0 = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Logo"], vm.logoEtab_0 = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm.cheminLogo_0 + "&leTypeDeFichier=IMPORT_FTP", vm.cheminPhoto1_0 = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Photo1"], vm.photo1Etab_0 = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm.cheminPhoto1_0 + "&leTypeDeFichier=IMPORT_FTP", vm.cheminPhoto2_0 = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Photo2"], vm.photo2Etab_0 = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm.cheminPhoto2_0 + "&leTypeDeFichier=IMPORT_FTP", vm.cheminPhoto3_0 = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Photo3"], vm.photo3Etab_0 = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm.cheminPhoto3_0 + "&leTypeDeFichier=IMPORT_FTP", vm.cheminPhoto4_0 = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Photo4"], vm.photo4Etab_0 = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm.cheminPhoto4_0 + "&leTypeDeFichier=IMPORT_FTP", vm.cheminPhoto5_0 = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Photo5"], vm.photo5Etab_0 = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm.cheminPhoto5_0 + "&leTypeDeFichier=IMPORT_FTP", Auth.parametrageParEtablissement()) for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) {
                indiceEtab = vm.tabEtablissements[i].id;
                var adresseEtab = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Adresse"];
                vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Adresse"] = $filter("base64decode")(adresseEtab);
                var textePresentationEtab = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/PrÃ©sentation"];
                vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/PrÃ©sentation"] = $filter("base64decode")(textePresentationEtab), vm["cheminLogo_" + indiceEtab] = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Logo"], vm["logoEtab_" + indiceEtab] = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm["cheminLogo_" + indiceEtab] + "&leTypeDeFichier=IMPORT_FTP", vm["cheminPhoto1_" + indiceEtab] = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo1"], vm["photo1Etab_" + indiceEtab] = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm["cheminPhoto1_" + indiceEtab] + "&leTypeDeFichier=IMPORT_FTP", vm["cheminPhoto2_" + indiceEtab] = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo2"], vm["photo2Etab_" + indiceEtab] = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm["cheminPhoto2_" + indiceEtab] + "&leTypeDeFichier=IMPORT_FTP", vm["cheminPhoto3_" + indiceEtab] = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo3"], vm["photo3Etab_" + indiceEtab] = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm["cheminPhoto3_" + indiceEtab] + "&leTypeDeFichier=IMPORT_FTP", vm["cheminPhoto4_" + indiceEtab] = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo4"], vm["photo4Etab_" + indiceEtab] = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm["cheminPhoto4_" + indiceEtab] + "&leTypeDeFichier=IMPORT_FTP", vm["cheminPhoto5_" + indiceEtab] = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo5"], vm["photo5Etab_" + indiceEtab] = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + vm["cheminPhoto5_" + indiceEtab] + "&leTypeDeFichier=IMPORT_FTP"
            }
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        var adresseEtab = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Adresse"];
        vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Adresse"] = $filter("base64encode")(adresseEtab);
        var textePresentationEtab = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/PrÃ©sentation"];
        if (vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/PrÃ©sentation"] = $filter("base64encode")(textePresentationEtab), vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Logo"] = vm.cheminLogo_0, vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Photo1"] = vm.cheminPhoto1_0, vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Photo2"] = vm.cheminPhoto2_0, vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Photo3"] = vm.cheminPhoto3_0, vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Photo4"] = vm.cheminPhoto4_0, vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_0/Photo5"] = vm.cheminPhoto5_0, Auth.parametrageParEtablissement()) for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) {
            indiceEtab = vm.tabEtablissements[i].id;
            var adresseEtab = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Adresse"];
            vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Adresse"] = $filter("base64encode")(adresseEtab);
            var textePresentationEtab = vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/PrÃ©sentation"];
            vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/PrÃ©sentation"] = $filter("base64encode")(textePresentationEtab), vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Logo"] = vm["cheminLogo_" + indiceEtab], vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo1"] = vm["cheminPhoto1_" + indiceEtab], vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo2"] = vm["cheminPhoto2_" + indiceEtab], vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo3"] = vm["cheminPhoto3_" + indiceEtab], vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo4"] = vm["cheminPhoto4_" + indiceEtab], vm.tabParametres["Sites/Familles/PageDeGarde/Etablissement_" + indiceEtab + "/Photo5"] = vm["cheminPhoto5_" + indiceEtab]
        }
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0, initialize()
        })
    }

    function uploadLogo(reponseXHR, idEtab) {
        if (vm.logoFlowConfig.target += "&idEtab=" + idEtab + "&typeDocument=logo", reponseXHR = angular.fromJson(reponseXHR), 200 === reponseXHR.code) {
            var cheminLogo = reponseXHR.data.message;
            Notification.notify("Enregistrement du logo", "Votre fichier a bien Ã©tÃ© enregistrÃ© !", "success", !0), vm["logoEtab_" + idEtab] = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + cheminLogo + "&leTypeDeFichier=IMPORT_FTP", vm["cheminLogo_" + idEtab] = cheminLogo, vm.saveParams()
        } else Notification.notify("Enregistrement du logo", "Une erreur est survenue : " + reponseXHR.message, "error", !0)
    }

    function uploadPhotos($files, $event, $flow) {
        $flow.upload()
    }

    function initTotalUpload() {
        vm.totalPhotoUploaded = 0
    }

    function setTarget($file, $event, $flow, idPhoto, idEtab) {
        $file.target = Settings.allSettings().notVersionningApiUri + "v3/televersement.awp?verbe=post&mode=CONTACT_ETAB&idPhoto=" + idPhoto + "&idEtab=" + idEtab + "&action=ajout"
    }

    function uploadPhotoSuccess($file, reponseXHR, $flow, idEtab) {
        if (reponseXHR = angular.fromJson(reponseXHR), 200 === reponseXHR.code) {
            var cheminPhoto = reponseXHR.data.message;
            Notification.notify("Enregistrement des photos", "Votre fichier a bien Ã©tÃ© enregistrÃ© !", "success", !0), vm["photo" + reponseXHR.data.idPhoto + "Etab_" + idEtab] = vm.urlTelechargement + "?cToken=" + Auth.cToken() + "&verbe=get&fichierId=" + cheminPhoto + "&leTypeDeFichier=IMPORT_FTP", vm["cheminPhoto" + reponseXHR.data.idPhoto + "_" + idEtab] = cheminPhoto
        } else Notification.notify("Enregistrement des photos", "Une erreur est survenue : " + reponseXHR.message, "error", !0)
    }

    function uploadError() {
        Notification.notify("Echec lors de l'enregistrement", "Une erreur est survenue lors du tÃ©lÃ©chargement", "error", !0)
    }

    function supprimeFichier(idEtab, typeDoc) {
        vm.totalPhotoUploaded = vm.totalPhotoUploaded - 1, TeleversementsService.deleteFile(vm["chemin" + typeDoc + "_" + idEtab]).then(function () {
            Notification.notify("Suppression du fichier", "Votre fichier a bien Ã©tÃ© supprimÃ© !", "success", !0), vm["chemin" + typeDoc + "_" + idEtab] = "", vm.saveParams()
        }, function (error) {
            Notification.notify("Suppression du fichier", "Une erreur est survenue lors de la suppression", "error", !0)
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.uploadLogo = uploadLogo, vm.uploadPhotos = uploadPhotos, vm.uploadError = uploadError, vm.supprimeFichier = supprimeFichier, vm.initTotalUpload = initTotalUpload, vm.setTarget = setTarget, vm.uploadPhotoSuccess = uploadPhotoSuccess;
    var nbEtablissement = 1;
    vm.disabledForm = !0, vm.tabEtablissements = Auth.etablissements(), vm.obj = {}, vm.tabParametres = {}, vm.totalPhotoUploaded = 0, vm.nbPhotosGalerie = [], vm.nbPhotosGalerie.length = 5, vm.ckEditorOptions = {
        allowedContent: !0,
        height: 150,
        config: {pasteFromWordRemoveFontStyles: !1},
        toolbar: "full",
        extraPlugins: "colorbutton,font,justify",
        toolbarGroups: [{name: "clipboard", groups: ["clipboard", "undo"]}, {
            name: "links",
            groups: ["link", "unlink"]
        }, {
            name: "insert",
            groups: ["Math", "table", "image", "specialchar", "horizontalrule"]
        }, {name: "tools"}, {
            name: "document",
            groups: ["mode"]
        }, {name: "colors"}, {name: "others"}, {
            name: "basicstyles",
            groups: ["basicstyles", "cleanup"]
        }, {
            name: "paragraph",
            groups: ["align", "list", "indent", "paragraph", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"]
        }, {name: "styles"}],
        removePlugins: "stylescombo,elementspath,smiley,magicline,showblocks,scayt,pagebreak,div,find,about,preview,templates,save,newpage,print,wsc,liststyle"
    }, vm.urlTelechargement = Settings.allSettings().notVersionningApiUri + "v3/telechargement.awp", vm.logoFlowConfig = {
        target: Settings.allSettings().notVersionningApiUri + "v3/televersement.awp?verbe=post&mode=CONTACT_ETAB&action=ajout",
        chunkSize: 1073741824,
        testChunks: !1,
        query: {data: JSON.stringify({token: $sessionStorage.token})},
        singleFile: !0
    }, vm.photosFlowConfig = {
        target: function (file) {
            return file.target
        },
        chunkSize: 1073741824,
        testChunks: !1,
        query: {data: JSON.stringify({token: $sessionStorage.token})},
        singleFile: !0
    }, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("ManuelsScolairesCtrl", ["ParametresService", "Auth", "ConnecteursService", "Notification", "$window", "Utils", function (ParametresService, Auth, ConnecteursService, Notification, $window, Utils) {
    function initialize() {
        vm.dicoParams = [], vm.dicoParams.push({libelle: "Sites/Connecteurs/CRISTALWEB/APIKey"}), vm.nbEtablissement = vm.tabEtablissements.length;
        for (var indiceEtab = 0, i = 1; i <= vm.nbEtablissement; i++) indiceEtab = vm.tabEtablissements[i - 1].id, vm.dicoParams.push({libelle: "Sites/Connecteurs/Encyclopaedia Universalis/Professeurs/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/Encyclopaedia Universalis/ElÃ¨ves/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/Encyclopaedia Universalis/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/Universalis Junior/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/Universalis Junior/Professeurs/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/Universalis Junior/ElÃ¨ves/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/Universalis Ecole/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/Universalis Ecole/Professeurs/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/Universalis Ecole/ElÃ¨ves/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/Britannica Image Quest/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/Britannica Image Quest/Professeurs/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/Britannica Image Quest/ElÃ¨ves/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/Britannica School/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/Britannica School/Professeurs/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/Britannica School/ElÃ¨ves/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/LESITETV/Professeurs/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/LESITETV/ElÃ¨ves/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/LESITETV/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/EDUCARTE/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/EDUCARTE/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/KNE/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/KNE/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/EDULIB/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/EDULIB/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/CNS/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/CNS/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/lelivrescolaire/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/lelivrescolaire/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/GEN5/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/GEN5/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/CRISTALWEB/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/CRISTALWEB/" + indiceEtab + "/RNE"}, {libelle: "Sites/Connecteurs/MANUELSPEARLTREES/" + indiceEtab + "/Actif"}, {libelle: "Sites/Connecteurs/MANUELSPEARLTREES/" + indiceEtab + "/RNE"}), 0 !== vm.tabEtablissements[i - 1].RNE && "" !== vm.tabEtablissements[i - 1].RNE && vm.dicoParams.push({libelle: "Sites/Connecteurs/Encyclopaedia Universalis/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/Universalis Junior/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/Universalis Ecole/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/Britannica Image Quest/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/Britannica School/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/EDUCARTE/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/KNE/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/EDULIB/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/CNS/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/lelivrescolaire/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/GEN5/" + vm.tabEtablissements[i - 1].RNE + "/Tested"}, {libelle: "Sites/Connecteurs/MANUELSPEARLTREES/" + vm.tabEtablissements[i - 1].RNE + "/Tested"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data;
            for (var indiceEtab = 0, i = 1; i <= vm.nbEtablissement; i++) indiceEtab = vm.tabEtablissements[i - 1].id, (vm.tabParametres["Sites/Connecteurs/Encyclopaedia Universalis/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/Encyclopaedia Universalis/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/Encyclopaedia Universalis/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/Universalis Junior/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/Universalis Junior/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/Universalis Junior/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/Universalis Ecole/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/Universalis Ecole/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/Universalis Ecole/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/Britannica Image Quest/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/Britannica Image Quest/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/Britannica Image Quest/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/Britannica School/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/Britannica School/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/Britannica School/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/LESITETV/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/LESITETV/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/LESITETV/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/EDUCARTE/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/EDUCARTE/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/EDUCARTE/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/KNE/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/KNE/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/KNE/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/EDULIB/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/EDULIB/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/EDULIB/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/CNS/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/CNS/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/CNS/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/lelivrescolaire/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/lelivrescolaire/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/lelivrescolaire/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/GEN5/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/GEN5/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/GEN5/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/CRISTALWEB/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/CRISTALWEB/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/CRISTALWEB/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE), (vm.tabParametres["Sites/Connecteurs/MANUELSPEARLTREES/" + indiceEtab + "/RNE"] === !1 || "" === vm.tabParametres["Sites/Connecteurs/MANUELSPEARLTREES/" + indiceEtab + "/RNE"]) && (vm.tabParametres["Sites/Connecteurs/MANUELSPEARLTREES/" + indiceEtab + "/RNE"] = vm.tabEtablissements[i - 1].RNE)
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    function checkLicence(nomConnecteur, codeRNE) {
        return "" === codeRNE ? void Notification.notify("VÃ©rification de la licence du connecteur", "Le code RNE est incorrect !", "error", !0) : void (vm.myPromise = ConnecteursService.get(nomConnecteur, codeRNE).then(function (reponse) {
            var bulle = "";
            if (angular.isDefined(reponse.bulle) && (bulle = reponse.bulle), reponse.licenceActive) {
                if (Notification.notify("VÃ©rification de la licence du connecteur", "Vous disposez d'une licence valide ! " + bulle, "success", !0), reponse.url && ("UniversalisJunior" === nomConnecteur || "EncyclopaediaUniversalis" === nomConnecteur || "UniversalisEcole" === nomConnecteur || "BritannicaImageQuest" === nomConnecteur || "BritannicaSchool" === nomConnecteur)) {
                    var n = $window.open(reponse.url, "_blank");
                    null == n && Notification.notify("Ouverture du site " + nomConnecteur, "Impossible d'ouvrir la page internet " + nomConnecteur + ", autorisez les fenÃªtres popups sur le site d'administration !", "warning", !0)
                }
            } else Notification.notify("VÃ©rification de la licence du connecteur", "Vous ne disposez pas de licence ! " + bulle, "error", !0);
            initialize()
        }, function (error) {
            angular.isDefined(error.data) && error.data.message ? Notification.notify("VÃ©rification de la licence du connecteur", error.data.message, "error", !0) : Notification.notify("VÃ©rification de la licence du connecteur", "Une erreur est survenue lors de l'execution du programme !", "error", !0)
        }))
    }

    function displayModalConfirmRGPD(libelleConnecteur, libelleParametrage) {
        Utils.displayModalConfirmRGPD(libelleConnecteur, libelleParametrage, vm.tabParametres).then(function (response) {
            ("desactivation" === response.etat || "accepte" === response.etat) && vm.paramUpdated()
        }, function (error) {
        })
    }

    var vm = this;
    vm.codeOgec = Auth.codeOgec(), vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.checkLicence = checkLicence, vm.displayModalConfirmRGPD = displayModalConfirmRGPD, vm.modeSupervision = Auth.modeSupervision(), vm.isCodeOgecForDevelopment = Auth.isCodeOgecForDevelopment(), vm.disabledForm = !0, vm.tabEtablissements = Auth.etablissements(), vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("ReglementsEnLigneCtrl", ["ParametresService", "BanquesService", "lodash", "Auth", "$uibModal", "Notification", "$q", function (ParametresService, BanquesService, lodash, Auth, $uibModal, Notification, $q) {
    function initialize() {
        var lesPromises = [ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        }), BanquesService.getBanques().then(function (reponse) {
            vm.tabBanques = reponse.banques
        })];
        $q.all(lesPromises).then(function () {
            vm.environnement = vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Environnement"], vm.codeSociete = vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/CodeSociÃ©tÃ©"], vm.reglementEnLigneActif = vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Actif"], vm.idBanque = vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Banque"], vm.idDevise = vm.tabParametres["Site/Reglement/Devise"], vm.paiementApiVersion = vm.tabParametres["Site/Reglement/Version/Api"], vm.banqueSelected = lodash.find(vm.tabBanques, {id: vm.idBanque}), vm.deviseSelected = lodash.find(vm.tabDevises, {id: vm.idDevise}), selectBanque()
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function parametragePlateformeOgone() {
        vm.libelleIdentifiant = "UserID", vm.cryptageVisible = !1, vm.certificatProductionVisible = !0, vm.certificatProductionLibelle = "PhraseClÃ©Out (ClÃ© SHA-OUT)", vm.certificatTestVisible = !0, vm.certificatTestLibelle = "PhraseClÃ© (ClÃ© SHA-IN)", vm.environnementVisible = !0, vm.numeroTPEVisible = !0, vm.numeroTPELibelle = "PSPID"
    }

    function parametragePlateformeAtos() {
        vm.libelleIdentifiant = "MERCHANT_ID", vm.cryptageVisible = !1, vm.certificatTestVisible = !1, vm.environnementVisible = !1, vm.certificatProductionVisible = !0, vm.certificatProductionLibelle = 'CLE_SECRETE (uniquement avec contrat "clÃ©s secrÃ¨tes")', vm.numeroTPEVisible = !0, vm.numeroTPELibelle = 'VERSION_CLE (uniquement avec contrat "clÃ©s secrÃ¨tes")'
    }

    function parametragePlateformeSystemPay() {
        vm.libelleIdentifiant = "Identifiant du site", vm.cryptageVisible = !0, vm.cryptageLibelle = "Algorithme de cryptage", vm.certificatProductionVisible = !0, vm.certificatProductionLibelle = "Certificat de production", vm.certificatTestVisible = !0, vm.certificatTestLibelle = "Certificat de test", vm.environnementVisible = !1, vm.numeroTPEVisible = !1
    }

    function parametragePlateformePostFinanceCheckout() {
        vm.libelleIdentifiant = "UserID", vm.cryptageVisible = !1, vm.certificatProductionVisible = !0, vm.certificatProductionLibelle = "ClÃ© d'application utilisateur production", vm.certificatTestVisible = !0, vm.certificatTestLibelle = "ClÃ© d'application utilisateur test", vm.environnementVisible = !0, vm.numeroTPEVisible = !0, vm.numeroTPELibelle = "SpaceID"
    }

    function parametrageURLCreditNord() {
        vm.lienBackofficePaiementVisible = !0, vm.lienBackofficePaiementLibelle = "Gestion WebAffaires", vm.lienBackofficePaiement = "https://office.webaffaires.org"
    }

    function parametrageURLCMIC() {
        vm.lienBackofficePaiementVisible = !0, vm.lienBackofficePaiementLibelle = "Tableau de bord CM-CIC Paiement / Monetico", vm.lienBackofficePaiement = "https://www.monetico-services.com/fr"
    }

    function parametrageURLSystemPay() {
        vm.lienBackofficePaiementVisible = !0, vm.lienBackofficePaiementLibelle = "BackOffice SYSTEMPAY", vm.lienBackofficePaiement = "https://paiement.systempay.fr/vads-merchant/"
    }

    function selectBanque() {
        angular.isUndefined(vm.banqueSelected) || ((infosBanque[vm.banqueSelected.id] || infosBanque["default"])(), (URLBackofficePaiement[vm.banqueSelected.id] || URLBackofficePaiement["default"])())
    }

    function saveParams() {
        vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/CodeSociÃ©tÃ©"] = vm.codeSociete, vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Environnement"] = vm.environnement, vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Actif"] = vm.reglementEnLigneActif, vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Banque"] = vm.banqueSelected.id, vm.tabParametres["Site/Reglement/Devise"] = vm.deviseSelected.id, vm.infosBanque = {
            id: vm.banqueSelected.id,
            certifProd: vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/CertificatProduction"],
            certifTest: vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/CertificatTest"],
            codeSociete: vm.codeSociete,
            numeroTPE: vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/NoTPE"],
            environnement: vm.environnement,
            cryptage: vm.tabParametres["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Cryptage"]
        };
        var lesPromisesSauvegarde = [ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres), BanquesService.enregistreInfosBanque(vm.infosBanque)];
        $q.all(lesPromisesSauvegarde).then(function () {
            vm.disabledForm = !0
        })
    }

    function migrationPaiementsToV2InBdd() {
        var lastMigrationV2 = vm.tabParametres["Site/Reglement/Date/MigrationV2"], paiementLastMigrationV2 = "";
        lastMigrationV2 && "" !== lastMigrationV2 && (paiementLastMigrationV2 = " (derniÃ¨re modification le : <strong>" + lastMigrationV2 + "</strong>)");
        var modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/prompt-validate-modal.template.html",
            controller: "PromptValidateModalCtrl",
            controllerAs: "CtrlPromptValidateModal",
            size: "md",
            resolve: {
                config: function () {
                    var config = {};
                    return config.title = "Migrer le paiement vers la v2 ?", config.message = "<p>ÃŠtes-vous sÃ»r de vouloir utiliser <strong> l'api v2</strong>" + paiementLastMigrationV2 + ' ? </p><div class="alert alert-danger text-center">Attention cette action est irreversible !</div>', config.messageconfirmation = "Pour confirmer votre choix", config.confirm1 = "Valider", config.cancel1 = "Non", config.confirm2 = "Migrer", config.cancel2 = "Annuler", config
                }
            }
        });
        modalInstance.result.then(function () {
            vm.myPromise = BanquesService.migrationPaiementsToV2().then(function (response) {
                initialize(), Notification.notify("Migration des paiements EcoleDirecte", "Migration des paiements EcoleDirecte rÃ©ussie", "success", !0), vm.retourPaiementMigration = response.data.message
            }, function (error) {
                console.log("error : ", error), angular.isDefined(error.data) ? (Notification.notify("Migration des paiements EcoleDirecte", "Une erreur est survenue lors de la migration.", "error", !0), vm.retourPaiementMigration = error.data.message) : Notification.notify("Migration des paiements EcoleDirecte", "Une erreur est survenue lors de la migration.", "error", !0)
            })
        })
    }

    function migrationPaiementsDataToBddV2() {
        var lastMigrationV2 = vm.tabParametres["Site/Reglement/Date/MigrationDatasV2"], paiementLastMigrationV2 = "";
        lastMigrationV2 && "" !== lastMigrationV2 && (paiementLastMigrationV2 = " (derniÃ¨re migration vers la v2 le : <strong>" + lastMigrationV2 + "</strong>)");
        var modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/prompt-validate-modal.template.html",
            controller: "PromptValidateModalCtrl",
            controllerAs: "CtrlPromptValidateModal",
            size: "md",
            resolve: {
                config: function () {
                    var config = {};
                    return config.title = "Migrer les donnÃ©es de paiement vers la v2 ?", config.message = "<p>ÃŠtes-vous sÃ»r de vouloir migrer <strong> le paiement</strong>" + paiementLastMigrationV2 + ' ? </p><div class="alert alert-danger text-center">Attention cette action est irreversible !</div>', config.messageconfirmation = "Pour confirmer votre choix", config.confirm1 = "Valider", config.cancel1 = "Non", config.confirm2 = "Migrer", config.cancel2 = "Annuler", config
                }
            }
        });
        modalInstance.result.then(function () {
            vm.myPromise = BanquesService.migrationPaiementsDataToBddV2().then(function (response) {
                initialize(), Notification.notify("Migration des paiements EcoleDirecte", "Migration des paiements EcoleDirecte rÃ©ussie", "success", !0), vm.retourPaiementMigration = response.data.message
            }, function (error) {
                console.log("error : ", error), angular.isDefined(error.data) ? (Notification.notify("Migration des paiements EcoleDirecte", "Une erreur est survenue lors de la migration.", "error", !0), vm.retourPaiementMigration = error.data.message) : Notification.notify("Migration des paiements EcoleDirecte", "Une erreur est survenue lors de la migration.", "error", !0)
            })
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.selectBanque = selectBanque, vm.migrationPaiementsToV2InBdd = migrationPaiementsToV2InBdd, vm.migrationPaiementsDataToBddV2 = migrationPaiementsDataToBddV2, vm.codeOgec = Auth.codeOgec(), vm.modeSupervision = Auth.modeSupervision(), vm.retourPaiementMigration = "", vm.disabledForm = !0, vm.tabDevises = [{
        id: "978",
        libelle: "EUR"
    }, {id: "756", libelle: "CHF"}, {id: "952", libelle: "XOF"}, {
        id: "953",
        libelle: "XPF"
    }], vm.tabCryptages = [{id: "", libelle: "Aucun"}, {id: "SHA-1", libelle: "SHA-1"}, {
        id: "HMAC-SHA-256",
        libelle: "HMAC-SHA-256"
    }], vm.dicoParams = [{libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Actif"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Banque"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/CodeSociÃ©tÃ©"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Cryptage"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/CertificatTest"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/CertificatProduction"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/NoTPE"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Environnement"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/MontantMinimum"}, {libelle: "Site/Reglement/Devise"}, {libelle: "Site/Reglement/Version/Api"}, {libelle: "Site/Reglement/Date/MigrationV2"}, {libelle: "Site/Reglement/Date/MigrationDatasV2"}], vm.tabParametres = {}, vm.certificatTestLibelle = "Certificat de test", vm.certificatProductionLibelle = "Certificat de production", vm.libelleIdentifiant = "Identifiant du site";
    var infosBanque = {
        1: function () {
            parametragePlateformeAtos()
        }, 2: function () {
            parametragePlateformeAtos()
        }, 3: function () {
            parametragePlateformeAtos()
        }, 4: function () {
            parametragePlateformeAtos()
        }, 5: function () {
            vm.libelleIdentifiant = "PBX_SITE", vm.cryptageVisible = !1, vm.certificatProductionVisible = !0, vm.certificatProductionLibelle = "ClÃ© HMAC", vm.certificatTestVisible = !0, vm.certificatTestLibelle = "PBX_RANG", vm.environnementVisible = !1, vm.numeroTPEVisible = !0, vm.numeroTPELibelle = "PBX_IDENTIFIANT"
        }, 6: function () {
            parametragePlateformeAtos()
        }, 7: function () {
            parametragePlateformeSystemPay()
        }, 8: function () {
            vm.libelleIdentifiant = "Code SociÃ©tÃ©", vm.cryptageVisible = !1, vm.certificatProductionVisible = !0, vm.certificatProductionLibelle = "ClÃ© de sÃ©curitÃ©", vm.certificatTestVisible = !1, vm.environnementVisible = !0, vm.numeroTPEVisible = !0, vm.numeroTPELibelle = "NumÃ©ro TPE"
        }, 9: function () {
            parametragePlateformeAtos()
        }, 10: function () {
            parametragePlateformeAtos()
        }, 11: function () {
            parametragePlateformeAtos()
        }, 12: function () {
            parametragePlateformeAtos()
        }, 13: function () {
            parametragePlateformeAtos()
        }, 14: function () {
            parametragePlateformeAtos()
        }, 15: function () {
            parametragePlateformeAtos()
        }, 16: function () {
            parametragePlateformeSystemPay()
        }, 17: function () {
            vm.libelleIdentifiant = "Code SociÃ©tÃ©", vm.cryptageVisible = !1, vm.certificatProductionVisible = !0, vm.certificatProductionLibelle = "ClÃ© de sÃ©curitÃ©", vm.certificatTestVisible = !1, vm.environnementVisible = !0, vm.numeroTPEVisible = !0, vm.numeroTPELibelle = "NumÃ©ro TPE"
        }, 18: function () {
            parametragePlateformeSystemPay()
        }, 19: function () {
            vm.libelleIdentifiant = "Identifiant commerÃ§ant", vm.cryptageVisible = !1, vm.certificatProductionVisible = !0, vm.certificatProductionLibelle = "ClÃ© d'accÃ¨s au service Payline (mode PRODUCTION)", vm.certificatTestVisible = !0, vm.certificatTestLibelle = "ClÃ© d'accÃ¨s au service Payline (mode HOMOLOGATION - TEST)", vm.environnementVisible = !0, vm.numeroTPEVisible = !0, vm.numeroTPELibelle = "NumÃ©ro de contrat de vente Ã  distance"
        }, 20: function () {
            parametragePlateformeSystemPay()
        }, 21: function () {
            parametragePlateformeSystemPay()
        }, 22: function () {
            parametragePlateformeSystemPay()
        }, 23: function () {
            parametragePlateformeOgone()
        }, 24: function () {
            parametragePlateformeSystemPay()
        }, 25: function () {
            parametragePlateformePostFinanceCheckout()
        }, "default": function () {
            vm.libelleIdentifiant = "Identifiant", vm.cryptageVisible = !1, vm.certificatProductionVisible = !1, vm.certificatTestVisible = !1, vm.environnementVisible = !1, vm.numeroTPEVisible = !1
        }
    }, URLBackofficePaiement = {
        1: function () {
            vm.lienBackofficePaiementVisible = !0, vm.lienBackofficePaiementLibelle = "BackOffice MERCANET", vm.lienBackofficePaiement = "https://mercanet-bo.bnpparibas.net"
        }, 2: function () {
            vm.lienBackofficePaiementVisible = !0, vm.lienBackofficePaiementLibelle = "Sherlock's Gestion", vm.lienBackofficePaiement = "https://sherlocks-gestion.secure.lcl.fr"
        }, 3: function () {
            vm.lienBackofficePaiementVisible = !1
        }, 4: function () {
            vm.lienBackofficePaiementVisible = !0, vm.lienBackofficePaiementLibelle = "Sogenactif Gestion", vm.lienBackofficePaiement = "https://office.sogenactif.com"
        }, 5: function () {
            vm.lienBackofficePaiementVisible = !0, vm.lienBackofficePaiementLibelle = "BackOffice E-transactions", vm.lienBackofficePaiement = "https://static.ca-moncommerce.com/documents/Vision_CAPS_10.5.0.air"
        }, 6: function () {
            parametrageURLCreditNord()
        }, 7: function () {
            parametrageURLSystemPay()
        }, 8: function () {
            parametrageURLCMIC()
        }, 9: function () {
            parametrageURLCreditNord()
        }, 10: function () {
            parametrageURLCreditNord()
        }, 11: function () {
            parametrageURLCreditNord()
        }, 12: function () {
            parametrageURLCreditNord()
        }, 13: function () {
            parametrageURLCreditNord()
        }, 14: function () {
            parametrageURLCreditNord()
        }, 15: function () {
            parametrageURLCreditNord()
        }, 16: function () {
            parametrageURLSystemPay()
        }, 17: function () {
            parametrageURLCMIC()
        }, 18: function () {
            parametrageURLSystemPay()
        }, 19: function () {
            vm.lienBackofficePaiementVisible = !0, vm.lienBackofficePaiementLibelle = "Centre d'administration commerÃ§ant PAYLINE", vm.lienBackofficePaiement = "https://adminpayment.citelis.fr/"
        }, 20: function () {
            parametrageURLSystemPay(), vm.lienBackofficePaiement = "https://sogecommerce.societegenerale.eu/vads-merchant/"
        }, 21: function () {
            parametrageURLSystemPay(), vm.lienBackofficePaiement = "https://secure.payzen.eu/vads-payment/"
        }, 22: function () {
            parametrageURLSystemPay(), vm.lienBackofficePaiement = "https://clicandpay.groupecdn.fr/vads-merchant/"
        }, 23: function () {
            vm.lienBackofficePaiementVisible = !0, vm.lienBackofficePaiementLibelle = "Centre d'administration commerÃ§ant PostFinance", vm.lienBackofficePaiement = "https://e-payment.postfinance.ch"
        }, 24: function () {
            parametrageURLSystemPay(), vm.lienBackofficePaiement = "https://scelliuspaiement.labanquepostale.fr/vads-merchant/"
        }, 25: function () {
            vm.lienBackofficePaiementVisible = !0, vm.lienBackofficePaiementLibelle = "Centre d'administration commerÃ§ant PostFinance Checkout (New version)", vm.lienBackofficePaiement = "https://checkout.postfinance.ch"
        }, "default": function () {
            vm.lienBackofficePaiementVisible = !1
        }
    };
    initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("DocumentsCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Familles/Documents/Etablissement_0/Administratifs"}, {libelle: "Sites/Familles/Documents/Etablissement_0/Notes"}, {libelle: "Sites/Familles/Documents/Etablissement_0/VS"}, {libelle: "Sites/Familles/Documents/Etablissement_0/InsReins"}, {libelle: "Sites/Familles/Documents/Etablissement_0/NotificationEmail"}, {libelle: "Sites/Familles/Documents/Etablissement_0/Entreprise"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("EntAdministrationCtrl", ["EntService", "ParametresService", "lodash", "Notification", "$q", "$uibModal", function (EntService, ParametresService, lodash, Notification, $q, $uibModal) {
    function initialize() {
        var lesPromises = [ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        }), EntService.listENT().then(function (data) {
            vm.tabEspacesTravail = data, vm.tabEspacesSdp = lodash.filter(vm.tabEspacesTravail, {salleDesProfs: !0}), vm.tabEspacesLibre = lodash.filter(vm.tabEspacesTravail, {type: "LIBRE"}), vm.tabEspacesOrga = lodash.chain(vm.tabEspacesTravail).filter(function (espace) {
                return espace.salleDesProfs === !1
            }).filter(function (espace) {
                return "ORGA" === espace.type
            }).value()
        }, function (error) {
            angular.isDefined(error.data) && error.data.message ? Notification.notify("Administration des espaces de travail", error.data.message, "error", !0) : Notification.notify("Administration des espaces de travail", "Une erreur est survenue lors de l'execution du programme !", "error", !0)
        })];
        vm.myPromise = $q.all(lesPromises).then(function () {
        })
    }

    function purgeEspacesTravail() {
        var modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/prompt-validate-modal.template.html",
            controller: "PromptValidateModalCtrl",
            controllerAs: "CtrlPromptValidateModal",
            size: "md",
            resolve: {
                config: function () {
                    var config = {};
                    return config.title = "Purger les espaces de travail ?", config.message = '<p>ÃŠtes-vous sÃ»r de vouloir supprimer <strong> l\'ensemble des anciens membres des espaces de travail</strong> ? </p><div class="alert alert-danger text-center">Attention cette action est irreversible !</div>', config.messageconfirmation = "Pour confirmer votre choix", config.confirm1 = "Valider", config.cancel1 = "Non", config.confirm2 = "Purger", config.cancel2 = "Annuler", config
                }
            }
        });
        modalInstance.result.then(function () {
            vm.myPromise = EntService.purgerEspaceTravail().then(function (response) {
                Notification.notify("Suppression des anciens membres ", "Suppression rÃ©ussie !", "success", !0), initialize()
            }, function (error) {
                Notification.notify("Suppression des anciens membres", "Une erreur est survenue lors de la suppression.", "error", !0)
            })
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.purgeEspacesTravail = purgeEspacesTravail, vm.dicoParams = [{libelle: "ENT/Date/Purge"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("EspaceTravailListeMembresCtrl", ["$uibModalInstance", "$uibModal", "lodash", "espaceT", "EntService", "Auth", "Notification", function ($uibModalInstance, $uibModal, lodash, espaceT, EntService, Auth, Notification) {
    function setDroitForAll(droit) {
        lodash.forEach(vm.tabMembres, function (membre) {
            membre.droit = droit
        }), vm.disabledForm = !1
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function save() {
        var administrateur = lodash.find(vm.tabMembres, function (membre) {
            return membre.droit === vm.constantes.DROIT_ADMIN
        });
        return angular.isUndefined(administrateur) ? void Notification.notify("Espace de travail", "Vous devez avoir <strong>au minimum un administrateur</strong> au sein de votre espace de travail !", "error", "fa ed-icon-workplace") : (vm.espaceTravail.membres = vm.tabMembres, void (vm.requestLoading = EntService.modifierDroits(vm.espaceTravail).then(function () {
            Notification.notify("Espace de travail", "Les droits des diffÃ©rents membres ont bien Ã©tÃ© modifiÃ©s ! ", "success", "fa ed-icon-workplace"), vm.disabledForm = !0
        }, function (response) {
            Notification.notify("Espace de travail", response.message, "error", "fa ed-icon-workplace")
        })))
    }

    function deleteMembre(membre) {
        var messageConfirmation = "", title = "";
        title = "Suppression d'un membre", messageConfirmation = "<p>ÃŠtes-vous sÃ»r de vouloir <strong>supprimer </strong> le membre <strong>" + membre.prenom + " " + membre.nom + "<strong> </strong>? </p>";
        var modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/confirm-modal.template.html",
            controller: "ConfirmModalCtrl",
            size: "md",
            resolve: {
                config: function () {
                    var config = {};
                    return config.title = title, config.message = messageConfirmation, config.confirm = "Valider", config.cancel = "Non", config
                }
            }
        });
        modalInstance.result.then(function () {
            var tabAdministrateurs = lodash.reject(vm.tabMembres, function (membre) {
                return membre.droit !== vm.constantes.DROIT_ADMIN
            });
            return tabAdministrateurs.length <= 1 && tabAdministrateurs[0].idMembre === membre.idMembre && tabAdministrateurs[0].profil === membre.profil ? void Notification.notify("Espace de travail", "Vous devez avoir <strong> au minimum un administrateur </strong> au sein de votre espace de travail !", "error", "fa ed-icon-workplace") : void (vm.requestLoading = EntService.supprimerMembre(membre, espaceT).then(function () {
                lodash.remove(vm.tabMembres, function (m) {
                    return membre.idMembre === m.idMembre && membre.profil === m.profil
                }), lodash.remove(vm.tabMembresDisplayed, function (m) {
                    return membre.idMembre === m.idMembre && membre.profil === m.profil
                }), Notification.notify("Espace de travail", "Le membre <strong>" + membre.prenom + " " + membre.nom + "</strong> a Ã©tÃ© supprimÃ© avec succÃ¨s", "success", "fa ed-icon-workplace")
            }, function (response) {
                Notification.notify("Espace de travail", response.message, "error", "fa ed-icon-workplace")
            }))
        })
    }

    function deleteMultiplesMembres() {
        var messageConfirmation = "", title = "",
            libelleMembre = vm.tabMembresToDelete.length > 1 ? "membres" : "membre";
        title = "Suppression de membres", messageConfirmation = '<p>ÃŠtes-vous sÃ»r de vouloir <strong>supprimer <span class="text-danger h5 size14">' + vm.tabMembresToDelete.length + " " + libelleMembre + "</span> ?</strong> </p>";
        var modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/confirm-modal.template.html",
            controller: "ConfirmModalCtrl",
            size: "md",
            resolve: {
                config: function () {
                    var config = {};
                    return config.title = title, config.message = messageConfirmation, config.confirm = "Valider", config.cancel = "Non", config
                }
            }
        });
        modalInstance.result.then(function () {
            var tabAdministrateurs = lodash.reject(vm.tabMembres, function (membre) {
                return membre.droit !== vm.constantes.DROIT_ADMIN
            }), nbAdminSupprimes = 0;
            return lodash.forEach(tabAdministrateurs, function (membreAdmin) {
                lodash.forEach(vm.tabMembresToDelete, function (membreToDelete) {
                    membreToDelete.idMembre === membreAdmin.idMembre && membreToDelete.profil === membreAdmin.profil && nbAdminSupprimes++
                })
            }), tabAdministrateurs.length === nbAdminSupprimes ? void Notification.notify("Espace de travail", "Vous devez avoir <strong> au minimum un administrateur </strong> au sein de votre espace de travail !", "error", "fa ed-icon-workplace") : void (vm.requestLoading = EntService.supprimerMultiplesMembres(vm.tabMembresToDelete, espaceT).then(function () {
                vm.tabMembresToDelete.length > 1 ? Notification.notify("Espace de travail", "Les membres ont Ã©tÃ© supprimÃ©s avec succÃ¨s", "success", "fa ed-icon-workplace") : Notification.notify("Espace de travail", "Le membre <strong>" + vm.tabMembresToDelete[0].prenom + " " + vm.tabMembresToDelete[0].nom + "</strong> a Ã©tÃ© supprimÃ© avec succÃ¨s", "success", "fa ed-icon-workplace"), vm.querySearch = "", vm.tabMembresToDelete = [], vm.selectedAll = !1, refresh()
            }, function (response) {
                Notification.notify("Espace de travail", response.message, "error", "fa ed-icon-workplace")
            }))
        })
    }

    function selectionnerMembrePourAjout() {
        var modalInstance = $uibModal.open({
            templateUrl: "modules/parametrages-generaux/ent-ajout-membres/ent-choix-membres.template.html",
            controller: "EspaceTravailSelectionMembresAjoutCtrl",
            controllerAs: "CtrlEspTravailSelectMembresAjout",
            backdrop: !1,
            size: "lg",
            resolve: {
                espaceT: function () {
                    return espaceT
                }, membres: function () {
                    return vm.tabMembres
                }
            }
        });
        modalInstance.result.then(function (shouldRefresh) {
            shouldRefresh && refresh()
        })
    }

    function addToMembresToDelete() {
        vm.selectedAll = !1, vm.tabMembresToDelete = lodash.filter(vm.tabMembres, {isSelected: !0})
    }

    function refresh() {
        vm.allIsLoaded = !1, vm.requestLoading = EntService.listeMembres(vm.espaceTravail.id).then(function (data) {
            vm.totalMembres = data.nbMembresTotal, vm.tabMembres = data.membres, vm.tabMembresDisplayed = [].concat(vm.tabMembres), vm.allIsLoaded = !0
        })
    }

    function setSelectedAll(isSelectAll) {
        vm.selectedAll = isSelectAll
    }

    function selectAllForDelete() {
        var tabMembresToDelete = vm.tabMembres;
        "" !== vm.querySearch && (tabMembresToDelete = vm.tabMembresDisplayed), lodash.forEach(tabMembresToDelete, function (membre) {
            membre.isSelected = vm.selectedAll
        }), vm.selectedAll ? vm.tabMembresToDelete = tabMembresToDelete : vm.tabMembresToDelete = []
    }

    function writingInSearchInput() {
        vm.selectedAll = !1, vm.tabMembresToDelete = [], lodash.forEach(vm.tabMembres, function (membre) {
            membre.isSelected = !1
        })
    }

    var vm = this;
    vm.constantes = EntService.CONSTANTES, vm.itemsParPage = 15, vm.tabMembres = [], vm.tabMembresDisplayed = [].concat(vm.tabMembres), vm.espaceTravail = espaceT, vm.disabledForm = !0, vm.selectedAll = !1, vm.tabMembresToDelete = [], vm.querySearch = "", vm.setDroitForAll = setDroitForAll, vm.save = save, vm.paramUpdated = paramUpdated, vm.deleteMembre = deleteMembre, vm.deleteMultiplesMembres = deleteMultiplesMembres, vm.selectionnerMembrePourAjout = selectionnerMembrePourAjout, vm.addToMembresToDelete = addToMembresToDelete, vm.setSelectedAll = setSelectedAll, vm.selectAllForDelete = selectAllForDelete, vm.writingInSearchInput = writingInSearchInput, refresh()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("EspaceTravailSelectionMembresAjoutCtrl", ["$uibModalInstance", "lodash", "espaceT", "membres", "SupervisionService", "Notification", "EntService", function ($uibModalInstance, lodash, espaceT, membres, SupervisionService, Notification, EntService) {
    function initialize() {
        setSelectedView("familles")
    }

    function setSelectedView(selectedView) {
        vm.allIsLoaded = "familles" === selectedView || "eleves" === selectedView, vm.querySearch = "", vm.tabUsers.length = 0, vm.selectedView = selectedView, ("professeurs" === selectedView || "personnels" === selectedView) && searchUsers()
    }

    function searchUsers(isSubmit) {
        if ("familles" === vm.selectedView || "eleves" === vm.selectedView) {
            if (vm.querySearch.length < vm.minCaractSearch) return;
            vm.allIsLoaded = !1
        }
        (angular.isUndefined(isSubmit) || "familles" === vm.selectedView || "eleves" === vm.selectedView) && (vm.requestLoading = SupervisionService.getUtilisateurs(vm.selectedView, vm.querySearch).then(function (reponse) {
            vm.tabUsers = [].concat(lodash.filter(reponse.utilisateurs, function (u) {
                var utilisateurDejaMembre = lodash.find(membres, function (m) {
                    return m.idMembre === u.id && m.profil === u.profil
                });
                return angular.isUndefined(utilisateurDejaMembre)
            })), vm.allIsLoaded = !0
        }, function (error) {
            angular.isDefined(error.data) ? Notification.notify("Recherche utilisateurs", error.data.message, "error", !0) : Notification.notify("Recherche utilisateurs", "Une erreur est survenue lors de l'execution du programme !", "error", !0)
        }))
    }

    function ajouterMembre(utilisateur) {
        vm.requestLoading = EntService.ajouterMembre(utilisateur, espaceT).then(function (data) {
            vm.hasChanged = !0, lodash.remove(vm.tabUsers, function (u) {
                return utilisateur.id === u.id
            }), membres.push({
                idMembre: utilisateur.id,
                profil: utilisateur.profil
            }), Notification.notify("Espace de travail", "L'utilisateur <strong>" + utilisateur.prenom + " " + utilisateur.nom + "</strong> a Ã©tÃ© ajoutÃ© avec succÃ¨s Ã  l'espace de travail", "success", "fa ed-icon-workplace")
        }, function (response) {
            Notification.notify("Espace de travail", response.message, "error", "fa ed-icon-workplace")
        })
    }

    var vm = this;
    vm.selectedView = "familles", vm.requestLoading = null, vm.querySearch = "", vm.minCaractSearch = 2, vm.tabUsers = [], vm.allIsLoaded = !1, vm.hasChanged = !1, vm.initialize = initialize, vm.setSelectedView = setSelectedView, vm.searchUsers = searchUsers, vm.ajouterMembre = ajouterMembre, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("AgendaCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.tabParametres = {}, vm.tabColorsDispos = ["#ffff99", "#ffff00", "#ffd966", "#ffbf00", "#ff8000", "#ff6666", "#ff0000", "#bfff00", "#80cc33", "#33cc33", "#1796b0", "#00bfff", "#3399ff", "#0080ff", "#0040ff", "#9999ff", "#bf00ff", "#ff00ff", "#8000ff", "#993300", "#800000"], vm.dicoParams = [{libelle: "Sites/Agenda/Etablissement_0/Couleur"}, {libelle: "Sites/ParamÃ©trage/NombreAgenda"}, {libelle: "Sites/ParamÃ©trage/NombrePostit"}], initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("QuestionnairesCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        vm.promiseContents = ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.promiseContents = ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/EDFORMS/Actif"}, {libelle: "Sites/EDFORMS/Professeurs/Signature/Actif"}, {libelle: "Autorisations/SMS"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").controller("OuiPassCtrl", ["ParametresService", "Auth", function (ParametresService, Auth) {
    function initialize() {
        vm.dicoParams.push({libelle: "OuiPass/Actif"});
        for (var indiceEtab = 0, nbEtablissement = vm.tabEtablissements.length, i = 0; nbEtablissement > i; i++) "" !== vm.tabEtablissements[i].RNE && (indiceEtab = vm.tabEtablissements[i].id, vm.dicoParams.push({libelle: "Sites/OuiPass/Etablissement_" + indiceEtab + "/Actif"}));
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.tabParametres = {}, vm.tabEtablissements = Auth.etablissements(), vm.dicoParams = [], initialize()
}]), angular.module("edadminApp.ParametragesEntreprises", ["edadminApp.Commun"]).controller("AdministratifEntrepriseCtrl", ["ParametresService", "Auth", function (ParametresService, Auth) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.modeSupervision = Auth.modeSupervision(), vm.dicoParams = [{libelle: "Sites/Entreprises/CoordonneesFamille/Actif"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesFamillesEleves", ["edadminApp.Commun"]).controller("AppreciationsFamillesElevesCtrl", ["ParametresService", "$routeParams", "Auth", function (ParametresService, $routeParams, Auth) {
    function initialize() {
        vm.dicoParams = [], Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/Professeurs"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/ProfesseurPrincipal"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/MentionDuConseil"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/VieScolaire"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/ChefEtablissement"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/AvecDÃ©calageConseil"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/NbreJoursAprÃ¨sDateConseil"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/PÃ©riodesCloturÃ©es"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/ClasseGroupe"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data;
            for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm["AppreciationsActive_" + indiceEtab] = !!(vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/Professeurs"] || vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/ProfesseurPrincipal"] || vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/MentionDuConseil"] || vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/VieScolaire"] || vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/ChefEtablissement"] || vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/ClasseGroupe"])) : vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/Professeurs"] || vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/ProfesseurPrincipal"] || vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/MentionDuConseil"] || vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/VieScolaire"] || vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/ChefEtablissement"] || vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/ClasseGroupe"] || (vm.AppreciationsActive = !1)
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm["moduleAppreciationUpdatedForEtab_" + indiceEtab] && !vm["AppreciationsActive_" + indiceEtab] && (vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/Professeurs"] = vm["AppreciationsActive_" + indiceEtab], vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/ProfesseurPrincipal"] = vm["AppreciationsActive_" + indiceEtab], vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/MentionDuConseil"] = vm["AppreciationsActive_" + indiceEtab], vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/VieScolaire"] = vm["AppreciationsActive_" + indiceEtab], vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/ChefEtablissement"] = vm["AppreciationsActive_" + indiceEtab], vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/ApprÃ©ciations/ClasseGroupe"] = vm["AppreciationsActive_" + indiceEtab])) : vm.moduleAppreciationUpdated && !vm.AppreciationsActive && (vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/Professeurs"] = vm.AppreciationsActive, vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/ProfesseurPrincipal"] = vm.AppreciationsActive, vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/MentionDuConseil"] = vm.AppreciationsActive, vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/VieScolaire"] = vm.AppreciationsActive, vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/ChefEtablissement"] = vm.AppreciationsActive, vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/ApprÃ©ciations/ClasseGroupe"] = vm.AppreciationsActive);
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams;
    var nbEtablissement = 1;
    vm.typeUser = $routeParams.typeEntity, "familles" === vm.typeUser ? vm.realTypeUser = "Familles" : "eleves" === vm.typeUser ? vm.realTypeUser = "Eleves" : vm.realTypeUser = "Entreprises", vm.tabEtablissements = Auth.etablissements(), vm.disabledForm = !0, vm.AppreciationsActive = !0, vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesFamillesEleves").controller("ViescolaireFamillesElevesCtrl", ["ParametresService", "$routeParams", "Auth", function (ParametresService, $routeParams, Auth) {
    function initialize() {
        vm.dicoParams = [{libelle: "Autorisations/SMS"}], Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/Actif"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/Absences"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/CommentaireAbsences"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/DemandesExceptionnelles"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/DemandesExceptionnellesJourJ"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/Dispenses"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/Retards"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/CommentaireRetards"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/Sanctions"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/Encouragements"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/SanctionnÃ©Par"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/CommentaireSanction"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/AfficherPermisPoint"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/EncouragÃ©Par"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/CommentaireEncouragement"}), "familles" === vm.typeUser && vm.dicoParams.push({libelle: "Sites/Familles/VieScolaire/Etablissement_" + indiceEtab + "/JustificationEnLigne"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.SMSActif = vm.tabParametres["Autorisations/SMS"];
            for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm["vieScolaireActive_" + indiceEtab] = vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/Actif"]) : vm.vieScolaireActive = vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_0/Actif"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/Actif"] = vm["vieScolaireActive_" + indiceEtab]) : vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_0/Actif"] = vm.vieScolaireActive;
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    function onChangeDemandesExceptionnelles(indiceEtab) {
        vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/DemandesExceptionnelles"] || (vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/DemandesExceptionnellesJourJ"] = !1)
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.onChangeDemandesExceptionnelles = onChangeDemandesExceptionnelles, vm.modeSupervision = Auth.modeSupervision(), vm.typeUser = $routeParams.typeEntity, "familles" === vm.typeUser ? vm.realTypeUser = "Familles" : "eleves" === vm.typeUser ? vm.realTypeUser = "Eleves" : vm.realTypeUser = "Entreprises", vm.tabEtablissements = Auth.etablissements();
    var nbEtablissement = 1;
    vm.disabledForm = !0, vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesFamillesEleves").controller("NotesFamillesElevesCtrl", ["ParametresService", "$routeParams", "Auth", function (ParametresService, $routeParams, Auth) {
    function initialize() {
        vm.dicoParams = [], Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/Actif"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/AvecDÃ©calage"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/NbreJoursDÃ©calage"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/CoefNotes"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/GrasSousMoyenne"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/GrasAuDessusMoyenne"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/LibellÃ©Notes"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/DateNotes"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/TypeDevoir"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/CoefMatiÃ¨re"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/Moyennes"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/MoyenneDevoir"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data;
            for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm["NotesActive_" + indiceEtab] = vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/Actif"]) : vm.NotesActive = vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/Notes/Actif"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/Actif"] = vm["NotesActive_" + indiceEtab]) : vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/Notes/Actif"] = vm.NotesActive;
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.typeUser = $routeParams.typeEntity, "familles" === vm.typeUser ? vm.realTypeUser = "Familles" : "eleves" === vm.typeUser ? vm.realTypeUser = "Eleves" : vm.realTypeUser = "Entreprises";
    var nbEtablissement = 1;
    vm.tabEtablissements = Auth.etablissements(), vm.disabledForm = !0, vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesFamillesEleves").controller("JournalClasseFamillesElevesCtrl", ["ParametresService", "Auth", "$routeParams", function (ParametresService, Auth, $routeParams) {
    function initialize() {
        vm.tabEtablissements = Auth.etablissements(), Auth.parametrageParEtablissement() ? nbEtablissement = vm.tabEtablissements.length : vm.tabEtablissements = vm.tabEtablissements.slice(0, 1);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/JournalDeClasse/Etablissement_" + indiceEtab + "/Actif"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.typeUser = $routeParams.typeEntity, vm.disabledForm = !0, "familles" === vm.typeUser ? vm.realTypeUser = "Familles" : vm.realTypeUser = "ElÃ¨ves", vm.dicoParams = [], vm.tabParametres = {};
    var nbEtablissement = 1;
    initialize()
}]), angular.module("edadminApp.ParametragesFamillesEleves").controller("CdtFamillesElevesCtrl", ["ParametresService", "$routeParams", "Auth", function (ParametresService, $routeParams, Auth) {
    function initialize() {
        vm.dicoParams = [], Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_0/CahierDeTexte"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_0/CahierDeTexteCompteRendu"}), "eleves" === vm.typeUser && vm.dicoParams.push({libelle: "Sites/ElÃ¨ves/VieScolaire/Etablissement_0/Blog"}));
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/CahierDeTexte"}, {libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/CahierDeTexteCompteRendu"}), "eleves" === vm.typeUser && vm.dicoParams.push({libelle: "Sites/ElÃ¨ves/VieScolaire/Etablissement_" + indiceEtab + "/Blog"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.CDTActif = vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_0/CahierDeTexte"];
            for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() && (indiceEtab = vm.tabEtablissements[i].id, vm["CDTActif_" + indiceEtab] = vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/CahierDeTexte"])
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_0/CahierDeTexte"] = vm.CDTActif;
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() && (indiceEtab = vm.tabEtablissements[i].id, vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/CahierDeTexte"] = vm["CDTActif_" + indiceEtab]);
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams;
    var nbEtablissement = 1;
    vm.typeUser = $routeParams.typeEntity, "familles" === vm.typeUser ? vm.realTypeUser = "Familles" : vm.realTypeUser = "ElÃ¨ves", vm.tabEtablissements = Auth.etablissements(), vm.disabledForm = !0, vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesFamillesEleves").controller("EdtFamillesElevesCtrl", ["ParametresService", "$routeParams", "Auth", function (ParametresService, $routeParams, Auth) {
    function initialize() {
        vm.dicoParams = [], Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/EmploisDuTemps"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data;
            for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm["EDTActif_" + indiceEtab] = vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/EmploisDuTemps"]) : vm.EDTActif = vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_0/EmploisDuTemps"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_" + indiceEtab + "/EmploisDuTemps"] = vm["EDTActif_" + indiceEtab]) : vm.tabParametres["Sites/" + vm.realTypeUser + "/VieScolaire/Etablissement_0/EmploisDuTemps"] = vm.EDTActif;
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.typeUser = $routeParams.typeEntity, "familles" === vm.typeUser ? vm.realTypeUser = "Familles" : "eleves" === vm.typeUser ? vm.realTypeUser = "Eleves" : vm.realTypeUser = "Entreprises";
    var nbEtablissement = 1;
    vm.tabEtablissements = Auth.etablissements(), vm.disabledForm = !0, vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesFamillesEleves").controller("MoyennesFamillesElevesCtrl", ["ParametresService", "$routeParams", "Auth", function (ParametresService, $routeParams, Auth) {
    function initialize() {
        vm.dicoParams = [], Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/Actif"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/AvecDÃ©calageConseil"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/NbreJoursAprÃ¨sDateConseil"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/PÃ©riodesCloturÃ©es"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/PÃ©riodesRelevÃ©"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/PÃ©riodesAnnÃ©e"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/HorsPÃ©riode"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/MoyenneElÃ¨ve"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/MoyenneClasse"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/MoyenneMin"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/MoyenneMax"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/MoyenneGÃ©nÃ©rale"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/CoefMatiÃ¨re"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/RangElÃ¨ve"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/Graphique"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data;
            for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm["MoyennesActive_" + indiceEtab] = vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/Actif"]) : vm.MoyennesActive = vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/Moyennes/Actif"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Moyennes/Actif"] = vm["MoyennesActive_" + indiceEtab]) : vm.tabParametres["Sites/" + vm.realTypeUser + "/Notes/Etablissement_0/Moyennes/Actif"] = vm.MoyennesActive;
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.typeUser = $routeParams.typeEntity, "familles" === vm.typeUser ? vm.realTypeUser = "Familles" : "eleves" === vm.typeUser ? vm.realTypeUser = "Eleves" : vm.realTypeUser = "Entreprises";
    var nbEtablissement = 1;
    vm.tabEtablissements = Auth.etablissements(), vm.disabledForm = !0, vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesFamillesEleves").controller("CarnetCorrespondanceFamillesElevesCtrl", ["ParametresService", "ActivitesService", "Auth", "lodash", "$routeParams", function (ParametresService, ActivitesService, Auth, lodash, $routeParams) {
    function initialize() {
        vm.tabEtablissements = Auth.etablissements(), Auth.parametrageParEtablissement() ? nbEtablissement = vm.tabEtablissements.length : vm.tabEtablissements = vm.tabEtablissements.slice(0, 1);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/CarnetCorrespondance/Etablissement_" + indiceEtab + "/Actif"}), "familles" === vm.typeUser && vm.dicoParams.push({libelle: "Sites/Familles/CarnetCorrespondance/Etablissement_" + indiceEtab + "/EcrireActif"}, {libelle: "Sites/Familles/CarnetCorrespondance/Etablissement_" + indiceEtab + "/TypesCorrespondance"}, {libelle: "Sites/Familles/CarnetCorrespondance/Etablissement_" + indiceEtab + "/DestPP"}, {libelle: "Sites/Familles/CarnetCorrespondance/Etablissement_" + indiceEtab + "/DestP"}, {libelle: "Sites/Familles/CarnetCorrespondance/Etablissement_" + indiceEtab + "/DestA"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.typeUser = $routeParams.typeEntity, vm.disabledForm = !0, vm.tabActivites = [], "familles" === vm.typeUser ? vm.realTypeUser = "Familles" : vm.realTypeUser = "ElÃ¨ves", vm.dicoParams = [], vm.tabParametres = {};
    var nbEtablissement = 1;
    initialize()
}]), angular.module("edadminApp.ParametragesFamilles", ["edadminApp.Commun"]).controller("AdministratifFamilleCtrl", ["ParametresService", "Auth", "moment", function (ParametresService, Auth, moment) {
    function initialize() {
        for (var nbEtablissement = vm.tabEtablissements.length, indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = vm.tabEtablissements[i].id, vm.dicoParams.push({libelle: "Sites/Familles/ModificationsRentreeEleve/Etablissement_" + indiceEtab + "/Regime/Actif"}, {libelle: "Sites/Familles/ModificationsRentreeEleve/Etablissement_" + indiceEtab + "/RestaurationMidi/Actif"}, {libelle: "Sites/Familles/ModificationsRentreeEleve/Etablissement_" + indiceEtab + "/RestaurationSoir/Actif"}, {libelle: "Sites/Familles/ModificationsRentreeEleve/Etablissement_" + indiceEtab + "/Activites/Actif"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.modifDeRentreeEleveActive = vm.tabParametres["Sites/Familles/ModificationsRentreeEleve/Actif"];
            var tabDateDebut = vm.tabParametres["Sites/Familles/ModificationsRentreeEleve/DateDebut"].split("/"),
                tabDateFin = vm.tabParametres["Sites/Familles/ModificationsRentreeEleve/DateFin"].split("/");
            vm.parametrageJourDateDebut = tabDateDebut[0], vm.parametrageMoisDateDebut = tabDateDebut[1], vm.parametrageJourDateFin = tabDateFin[0], vm.parametrageMoisDateFin = tabDateFin[1]
        })
    }

    function checkValidityDate(_formAdministratif, moisSelected, jourSelected, inputJour, inputMois) {
        var anneeCourante = moment().year(),
            dateSelected = anneeCourante + "-" + vm.parametrageMoisDateDebut + "-" + vm.parametrageJourDateDebut;
        if (moment(dateSelected).isAfter(anneeCourante + "-07-13") && moment(dateSelected).isBefore(anneeCourante + 1 + "-01-01")) {
            var dateDebutAnneeScolaire = Auth.parametragesRNE("anneeScolaireDebut") + "-" + moisSelected + "-" + jourSelected;
            moment(dateDebutAnneeScolaire).isValid() ? (_formAdministratif[inputJour].$invalid = !1, _formAdministratif[inputMois].$invalid = !1, _formAdministratif.$invalid = !1) : (_formAdministratif[inputJour].$invalid = !0, _formAdministratif[inputMois].$invalid = !0, _formAdministratif.$invalid = !0)
        }
        if (moment(dateSelected).isAfter(anneeCourante - 1 + "-12-31") && moment(dateSelected).isBefore(anneeCourante + 1 + "-07-14")) {
            var dateFinAnneeScolaire = Auth.parametragesRNE("anneeScolaireFin") + "-" + moisSelected + "-" + jourSelected;
            moment(dateFinAnneeScolaire).isValid() ? (_formAdministratif[inputJour].$invalid = !1, _formAdministratif[inputMois].$invalid = !1, _formAdministratif.$invalid = !1) : (_formAdministratif[inputJour].$invalid = !0, _formAdministratif[inputMois].$invalid = !0, _formAdministratif.$invalid = !0)
        }
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams(_form) {
        _form.$invalid ? (vm.tabParametres["Sites/Familles/ModificationsRentreeEleve/DateDebut"] = "", vm.tabParametres["Sites/Familles/ModificationsRentreeEleve/DateFin"] = "") : vm.modifDeRentreeEleveActive && (vm.tabParametres["Sites/Familles/ModificationsRentreeEleve/DateDebut"] = vm.parametrageJourDateDebut + "/" + vm.parametrageMoisDateDebut, vm.tabParametres["Sites/Familles/ModificationsRentreeEleve/DateFin"] = vm.parametrageJourDateFin + "/" + vm.parametrageMoisDateFin), vm.tabParametres["Sites/Familles/ModificationsRentreeEleve/Actif"] = vm.modifDeRentreeEleveActive, ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.checkValidityDate = checkValidityDate, vm.anneeScolaireDebut = Auth.parametragesRNE("anneeScolaireDebut"), vm.anneeScolaireFin = Auth.parametragesRNE("anneeScolaireFin"), vm.disabledForm = !0, vm.tabEtablissements = Auth.etablissements(), vm.dicoParams = [{libelle: "Sites/Familles/ComptabilitÃ©/ModeDeReglement"}, {libelle: "Sites/Familles/Coordonnees/Actif"}, {libelle: "Sites/Familles/Coordonnees/Aide"}, {libelle: "Sites/ParamÃ©trage/ConjointsAutorisÃ©s"}, {libelle: "Autorisations/SMS"}, {libelle: "Sites/Familles/Coordonnees/Etablissement_0/AuthentificationSMS"}, {libelle: "Sites/Familles/ModificationsRentreeEleve/Actif"}, {libelle: "Sites/Familles/ModificationsRentreeEleve/DateDebut"}, {libelle: "Sites/Familles/ModificationsRentreeEleve/DateFin"}, {libelle: "Sites/Familles/ModificationsRentreeEleve/Aide"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesFamilles").controller("ComptabiliteFamilleCtrl", ["ParametresService", "PorteMonnaieService", "$q", "lodash", function (ParametresService, PorteMonnaieService, $q, lodash) {
    function initialize() {
        var lesPromises = [ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.HeureMinAlerteSMS = angular.copy(vm.tabParametres["ConfigSMS/Alertes/Factures/HeureMin"]), vm.HeureMaxAlerteSMS = angular.copy(vm.tabParametres["ConfigSMS/Alertes/Factures/HeureMax"]);
            var paramHeureMax = vm.HeureMaxAlerteSMS, paramHeureMin = vm.HeureMinAlerteSMS;
            vm.HeureMaxAlerteSMS = convertToDate(paramHeureMax), vm.HeureMinAlerteSMS = convertToDate(paramHeureMin)
        }), PorteMonnaieService.getPorteMonnaie("commun").then(function (reponse) {
            vm.tabPorteMonnaie = reponse.portesMonnaie
        })];
        $q.all(lesPromises).then(function () {
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.dicoParamsToSave = angular.copy(vm.dicoParams), vm.tabParametres["ConfigSMS/Alertes/Factures/HeureMin"] = convertToString(vm.HeureMinAlerteSMS), vm.tabParametres["ConfigSMS/Alertes/Factures/HeureMax"] = convertToString(vm.HeureMaxAlerteSMS), lodash.forEach(vm.tabPorteMonnaie, function (porteMonnaie, key) {
            vm.dicoParamsToSave.push({libelle: "Sites/Familles/ComptabilitÃ©/PortesMonaie/Affichage/" + porteMonnaie.code}, {libelle: "Sites/Familles/ComptabilitÃ©/PortesMonaie/Payable/" + porteMonnaie.code}), vm.tabParametres["Sites/Familles/ComptabilitÃ©/PortesMonaie/Affichage/" + porteMonnaie.code] = porteMonnaie.actif, vm.tabParametres["Sites/Familles/ComptabilitÃ©/PortesMonaie/Payable/" + porteMonnaie.code] = porteMonnaie.payable
        }), ParametresService.enregistrerParametres(vm.dicoParamsToSave, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    function convertToDate(stringToConvert) {
        var partHeure = stringToConvert.substr(0, 2), partMinutes = stringToConvert.substr(2, 2);
        return moment(partHeure + partMinutes, "HH:mm").toDate()
    }

    function convertToString(dateToConvert) {
        return moment(dateToConvert).format("HHmm")
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.convertToDate = convertToDate, vm.convertToString = convertToString, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Familles/ComptabilitÃ©/Actif"}, {libelle: "Sites/Familles/Documents/Etablissement_0/Factures"}, {libelle: "ConfigSMS/Alertes/Factures/HeureMin"}, {libelle: "ConfigSMS/Alertes/Factures/HeureMax"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/SoldeCrÃ©diteur"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Libelle/SoldeDebiteur"}, {libelle: "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Libelle/SoldeCrediteur"}, {libelle: "Autorisations/SMS"}, {libelle: "Sites/Familles/ComptabilitÃ©/PortesMonaie/Actif"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesFamillesEleves").controller("LSUNCompetencesFamillesElevesCtrl", ["ParametresService", "$routeParams", "Auth", function (ParametresService, $routeParams, Auth) {
    function initialize() {
        vm.dicoParams = [], Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/LSUN/Actif"}, {libelle: "Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/LSUN/NbreJoursDÃ©calage"}, {libelle: "Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/LSUN/AvecDÃ©calage"}, {libelle: "Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/LSUN/EvaluationsComposantesActif"}, {libelle: "Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/LSUN/PositionMatiere"}, {libelle: "Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/LSUN/OngletCompetences"}, {libelle: "Sites/Familles/Notes/Etablissement_" + indiceEtab + "/Notes/AvecDÃ©calage"}, {libelle: "Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/LSUN/Graphiques/Actif"}, {libelle: "Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/LSUN/Graphiques/ModeCalcul"}, {libelle: "Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/CompNumeriques/Actif"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data;
            for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm["LSUNActif_" + indiceEtab] = vm.tabParametres["Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/LSUN/Actif"]) : vm.LSUNActif = vm.tabParametres["Sites/" + vm.realTypeUser + "/LSUN/Etablissement_0/LSUN/Actif"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) Auth.parametrageParEtablissement() ? (indiceEtab = vm.tabEtablissements[i].id, vm.tabParametres["Sites/" + vm.realTypeUser + "/LSUN/Etablissement_" + indiceEtab + "/LSUN/Actif"] = vm["LSUNActif_" + indiceEtab]) : vm.tabParametres["Sites/" + vm.realTypeUser + "/LSUN/Etablissement_0/LSUN/Actif"] = vm.LSUNActif;
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.typeUser = $routeParams.typeEntity, "familles" === vm.typeUser ? vm.realTypeUser = "Familles" : "eleves" === vm.typeUser ? vm.realTypeUser = "Eleves" : vm.realTypeUser = "Entreprises", vm.tabEtablissements = Auth.etablissements(), vm.disabledForm = !0;
    var nbEtablissement = 1;
    vm.tabParametres = {}, vm.modeSupervision = Auth.modeSupervision(), initialize()
}]), angular.module("edadminApp.ParametragesFamillesEleves").controller("SuiviStageFamillesEleveCtrl", ["ParametresService", "Auth", function (ParametresService, Auth) {
    function initialize() {
        vm.tabEtablissements = Auth.etablissements(), Auth.parametrageParEtablissement() ? nbEtablissement = vm.tabEtablissements.length : vm.tabEtablissements = vm.tabEtablissements.slice(0, 1);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/Familles/SuiviStages/Etablissement_" + indiceEtab + "/Actif"}, {libelle: "Sites/Familles/SuiviStages/Etablissement_" + indiceEtab + "/AfficherCompteRenduVisite"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0;
    var nbEtablissement = 1;
    vm.tabParametres = {}, vm.dicoParams = [], initialize()
}]), angular.module("edadminApp.ParametragesEleves", ["edadminApp.Commun"]).controller("BadgeEleveCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Mobiles/CarteCantine/Actif"}, {libelle: "Sites/Mobiles/QRCode/Actif"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesEleves").controller("SuiviStageEleveCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Eleves/SuiviStages/Actif"}, {libelle: "Sites/Eleves/SuiviStages/ActiverRecherche"}, {libelle: "Sites/Eleves/SuiviStages/AfficherCompteRenduVisite"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesEleves").controller("ComptabiliteEleveCtrl", ["ParametresService", "PorteMonnaieService", "lodash", "Auth", function (ParametresService, PorteMonnaieService, lodash, Auth) {
    function initialize() {
        Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/Eleves/Comptabilite/Etablissement_" + indiceEtab + "/PortesMonaie/Actif"});
        vm.requestLoading = PorteMonnaieService.getPorteMonnaie("eleves").then(function (reponse) {
            vm.tabPorteMonnaie = reponse.portesMonnaie, lodash.forEach(vm.tabPorteMonnaie, function (porteMonnaie, key) {
                for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/Eleves/Comptabilite/Etablissement_" + indiceEtab + "/PortesMonaie/Affichage/" + porteMonnaie.code})
            }), ParametresService.listeParametres(vm.dicoParams).then(function (data) {
                vm.tabParametres = data
            })
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.dicoParamsToSave = angular.copy(vm.dicoParams), ParametresService.enregistrerParametres(vm.dicoParamsToSave, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.tabEtablissements = Auth.etablissements(), vm.disabledForm = !0;
    var nbEtablissement = 1;
    vm.dicoParams = [], initialize()
}]), angular.module("edadminApp.ParametragesProfesseurs", ["edadminApp.Commun"]).controller("NotesProfesseurCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.saisieNotesActive = vm.tabParametres["Sites/Professeurs/CarnetDeNotes/Actif"], vm.seulPPVoieToutesLesNotes = vm.tabParametres["Sites/Professeurs/CarnetDeNotes/seulPPVoieToutesLesNotes"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["Sites/Professeurs/CarnetDeNotes/Actif"] = vm.saisieNotesActive, vm.tabParametres["Sites/Professeurs/CarnetDeNotes/seulPPVoieToutesLesNotes"] = vm.seulPPVoieToutesLesNotes, ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Professeurs/CarnetDeNotes/Actif"}, {libelle: "Sites/Professeurs/CarnetDeNotes/seulPPVoieToutesLesNotes"}, {libelle: "Sites/Professeurs/CarnetDeNotes/Moyennes/MoyenneClasse"}, {libelle: "Sites/Professeurs/CarnetDeNotes/Moyennes/MoyenneMin"}, {libelle: "Sites/Professeurs/CarnetDeNotes/Moyennes/MoyenneMax"}, {libelle: "Sites/Professeurs/CarnetDeNotes/Moyennes/MoyenneGenerale"}, {libelle: "Sites/Professeurs/CarnetDeNotes/Moyennes/MoyennesSimulation"}, {libelle: "Sites/Professeurs/CarnetDeNotes/Moyennes/CoefMatiere"}, {libelle: "Sites/Professeurs/CarnetDeNotes/Moyennes/RangEleve"}, {libelle: "Sites/Professeurs/CarnetDeNotes/Moyennes/Graphique"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesProfesseurs").controller("CahierJournalProfesseurCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.SaisieCjActive = vm.tabParametres["Sites/Professeurs/CahierJournal/Actif"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["Sites/Professeurs/CahierJournal/Actif"] = vm.SaisieCjActive, ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Professeurs/CahierJournal/Actif"}, {libelle: "Sites/Professeurs/CahierJournal/Lundi"}, {libelle: "Sites/Professeurs/CahierJournal/Mardi"}, {libelle: "Sites/Professeurs/CahierJournal/Mercredi"}, {libelle: "Sites/Professeurs/CahierJournal/Jeudi"}, {libelle: "Sites/Professeurs/CahierJournal/Vendredi"}, {libelle: "Sites/Professeurs/CahierJournal/Samedi"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesProfesseurs").controller("CdtProfesseurCtrl", ["ParametresService", "ArchivageCDTService", "$q", "$uibModal", function (ParametresService, ArchivageCDTService, $q, $uibModal) {
    function initialize() {
        var promises = [ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.SaisieCdtActive = vm.tabParametres["Sites/Professeurs/CahierDeTexte/Actif"], vm.SaisieCdtPrimaireActive = vm.tabParametres["Sites/Professeurs/CahierDeTextePrimaire/Actif"]
        }), ArchivageCDTService.getAnneesArchivage().then(function (data) {
            vm.tabAnneesArchivage = data.annees, vm.cleArchivage = data.cle
        })];
        $q.all(promises)
    }

    function consulterArchives() {
        $uibModal.open({
            templateUrl: "modules/parametrages-professeurs/cahier-de-textes-archives.html",
            controller: "ArchivesCDTCtrl",
            controllerAs: "CtrlArchivesCDT",
            size: "lg",
            resolve: {
                anneesArchivage: function () {
                    return vm.tabAnneesArchivage
                }, cleArchivage: function () {
                    return vm.cleArchivage
                }
            }
        })
    }

    function saisieCDTDisabled() {
        vm.SaisieCdtPrimaireActive = vm.SaisieCdtActive === !1 ? vm.SaisieCdtActive : vm.SaisieCdtPrimaireActive
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["Sites/Professeurs/CahierDeTexte/Actif"] = vm.SaisieCdtActive, vm.tabParametres["Sites/Professeurs/CahierDeTextePrimaire/Actif"] = vm.SaisieCdtPrimaireActive, ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.consulterArchives = consulterArchives, vm.saisieCDTDisabled = saisieCDTDisabled, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Professeurs/CahierDeTexte/Actif"}, {libelle: "Sites/Professeurs/CahierDeTextePrimaire/Actif"}, {libelle: "Sites/Professeurs/CahierDeTextePrimaire/SaisieSimplifiee"}, {libelle: "Sites/Professeurs/CahierDeTextePrimaire/SaisieCompteRendu"}, {libelle: "Sites/Professeurs/CahierDeTexte/DonnÃ©LeModifiable"}, {libelle: "Sites/Professeurs/CahierDeTexte/EmploiDuTemps"}, {libelle: "Sites/Professeurs/CahierDeTexte/Archives"}, {libelle: "Sites/Professeurs/CahierDeTexte/LienBiblioManuel"}, {libelle: "Sites/Professeurs/CahierDeTexte/GestionCorrespondances"}, {libelle: "Sites/Professeurs/CahierDeTexte/CompteRenduSeancePrevisionnel"}], vm.tabParametres = {}, initialize()
}]).controller("ArchivesCDTCtrl", ["anneesArchivage", "cleArchivage", function (anneesArchivage, cleArchivage) {
    var vm = this;
    vm.anneesArchivage = anneesArchivage, vm.cleArchivage = cleArchivage
}]), angular.module("edadminApp.ParametragesProfesseurs").controller("EdtProfesseurCtrl", ["ParametresService", "EDTService", "lodash", "$q", function (ParametresService, EDTService, lodash, $q) {
    function initialize() {
        var lesPromises = [ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.isEDTActif = vm.tabParametres["Sites/Professeurs/EmploiDuTemps/Actif"]
        }), EDTService.getListeSalles().then(function (reponse) {
            vm.tabSalles = reponse.salles
        })];
        $q.all(lesPromises).then(function () {
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.dicoParamsToSave = angular.copy(vm.dicoParams), vm.tabParametres["Sites/Professeurs/EmploiDuTemps/Actif"] = vm.isEDTActif, lodash.forEach(vm.tabSalles, function (salle) {
            vm.dicoParamsToSave.push({libelle: "Sites/Professeurs/EmploiDuTemps/ReservationSalles/" + salle.id + "/Actif"}), vm.tabParametres["Sites/Professeurs/EmploiDuTemps/ReservationSalles/" + salle.id + "/Actif"] = salle.actif
        }), ParametresService.enregistrerParametres(vm.dicoParamsToSave, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Professeurs/EmploiDuTemps/Actif"}, {libelle: "Sites/Professeurs/EmploiDuTemps/ReservationSalles/Actif"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesProfesseurs").controller("AdministratifProfesseurCtrl", ["ParametresService", "Auth", function (ParametresService, Auth) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.modeSupervision = Auth.modeSupervision(), vm.dicoParams = [{libelle: "Sites/Professeurs/CoordonneesFamille/Actif"}, {libelle: "Sites/Professeurs/Consultation/CoordonneesEnseignant/Actif"}, {libelle: "Sites/Professeurs/Consultation/EmploiDuTempsEnseignant/Actif"}, {libelle: "Sites/Professeurs/RDVPP/Actif"}, {libelle: "Sites/Professeurs/RDVPP/Individuel/Actif"}, {libelle: "Sites/Professeurs/Visio/Exterieure/Actif"}, {libelle: "Sites/Professeurs/Dispositifs/Actif"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesProfesseurs").controller("AppreciationsProfesseurCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.saisieAppreciationsActive = vm.tabParametres["Sites/Professeurs/CarnetDeNotes/PPmodifTout"], vm.saisieAppreciationsVSParProf = vm.tabParametres["Sites/Professeurs/CarnetDeNotes/PPmodifVS"], vm.saisieAppreciationClasseParProf = vm.tabParametres["Sites/Professeurs/CarnetDeNotes/saisieAppClasse"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["Sites/Professeurs/CarnetDeNotes/PPmodifTout"] = vm.saisieAppreciationsActive, vm.tabParametres["Sites/Professeurs/CarnetDeNotes/PPmodifVS"] = vm.saisieAppreciationsVSParProf, vm.tabParametres["Sites/Professeurs/CarnetDeNotes/saisieAppClasse"] = vm.saisieAppreciationClasseParProf, ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Professeurs/CarnetDeNotes/PPmodifTout"}, {libelle: "Sites/Professeurs/CarnetDeNotes/PPmodifVS"}, {libelle: "Sites/Professeurs/CarnetDeNotes/saisieAppClasse"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesProfesseurs").controller("LSUNCompetencesProfesseurCtrl", ["ParametresService", "Auth", "LSUService", "lodash", "$filter", function (ParametresService, Auth, LSUService, lodash, $filter) {
    function initialize() {
        Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length), vm.dicoParams = [{libelle: "Sites/Professeurs/LSUN/Actif"}, {libelle: "Sites/Professeurs/LSUN/ConversionEvalNotes"}, {libelle: "Sites/Professeurs/LSUN/ChoixCycleCatalogue"}, {libelle: "Sites/Professeurs/LSUN/CompNumeriques/Actif"}, {libelle: "Sites/Professeurs/LSUN/CompNumeriques/TypeAffectationProf"}, {libelle: "Sites/Professeurs/LSUN/CompNumeriques/LibelleEval1"}, {libelle: "Sites/Professeurs/LSUN/CompNumeriques/LibelleEval2"}, {libelle: "Sites/Professeurs/LSUN/CompNumeriques/LibelleEval3"}], vm.promiseLoading = LSUService.listClassesProfsCompetencesNumeriques().then(function (data) {
            return vm.tabClassesCompNum = data.classes, vm.tabProfsCompNum = data.profs, vm.tabClassesCompNum.forEach(function (classe) {
                classe.idsProfs.forEach(function (idProf) {
                    vm.dicoParamsClassesProfCompNum.push({libelle: "Sites/Professeurs/LSUN/CompNumeriques/Classe/" + classe.id + "/Prof/" + idProf})
                })
            }), ParametresService.listeParametres(vm.dicoParams.concat(vm.dicoParamsClassesProfCompNum))
        }).then(function (data) {
            vm.tabParametres = data, vm.tabParametres["Sites/Professeurs/LSUN/CompNumeriques/LibelleEval1"] = $filter("base64decode")(data["Sites/Professeurs/LSUN/CompNumeriques/LibelleEval1"]), vm.tabParametres["Sites/Professeurs/LSUN/CompNumeriques/LibelleEval2"] = $filter("base64decode")(data["Sites/Professeurs/LSUN/CompNumeriques/LibelleEval2"]), vm.tabParametres["Sites/Professeurs/LSUN/CompNumeriques/LibelleEval3"] = $filter("base64decode")(data["Sites/Professeurs/LSUN/CompNumeriques/LibelleEval3"])
        })
    }

    function onSelectProfClasseCompNum(idProf, idClasse) {
        var libelleParam = "Sites/Professeurs/LSUN/CompNumeriques/Classe/" + idClasse + "/Prof/" + idProf;
        angular.isUndefined(lodash.find("libelle", libelleParam)) && vm.dicoParamsClassesProfCompNumToSave.push({libelle: "Sites/Professeurs/LSUN/CompNumeriques/Classe/" + idClasse + "/Prof/" + idProf})
    }

    function getProfCompNumById(idProf) {
        return vm.tabProfsCompNum.find(function (prof) {
            return prof.id === idProf
        })
    }

    function isCompNumActif() {
        return this.tabParametres["Sites/Professeurs/LSUN/Actif"] && this.tabParametres["Sites/Professeurs/LSUN/CompNumeriques/Actif"]
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams.concat(vm.dicoParamsClassesProfCompNumToSave), vm.tabParametres).then(function () {
            vm.disabledForm = !0, initialize()
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.getProfCompNumById = getProfCompNumById, vm.isCompNumActif = isCompNumActif, vm.onSelectProfClasseCompNum = onSelectProfClasseCompNum;
    var nbEtablissement = 1;
    vm.disabledForm = !0, vm.tabEtablissements = Auth.etablissements(), vm.tabClassesCompNum = [], vm.tabProfsCompNum = [], vm.tabParametres = {}, vm.dicoParamsClassesProfCompNum = [], vm.dicoParamsClassesProfCompNumToSave = [], vm.modeSupervision = Auth.modeSupervision(), initialize()
}]), angular.module("edadminApp.ParametragesProfesseurs").controller("LSLCompetencesProfesseurCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Professeurs/LSL/Actif"}, {
        libelle: "Sites/Professeurs/LSL/SaisieAvisPPSeulement"
    }, {libelle: "Sites/Professeurs/LSL/SaisieAvisCESeulementParPersonnel"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesProfesseurs").controller("BadgeProfesseursCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Mobiles/CarteCantine_P/Actif"}, {libelle: "Sites/Mobiles/QRCode/Actif"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesProfesseurs").controller("SuiviStageProfesseurCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, vm.SaisieStageActive = vm.tabParametres["Sites/Professeurs/SuiviStages/Actif"]
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.tabParametres["Sites/Professeurs/SuiviStages/Actif"] = vm.SaisieStageActive, ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Professeurs/SuiviStages/Actif"}, {libelle: "Sites/Professeurs/SuiviStages/AfficherLesEvaluations"}, {libelle: "Sites/Professeurs/SuiviStages/AfficherLeSuivi"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesProfesseursPersonnels", ["edadminApp.Commun"]).controller("FinancesProfesseursPersonnelsCtrl", ["ParametresService", "$routeParams", "PorteMonnaieService", "$q", "lodash", function (ParametresService, $routeParams, PorteMonnaieService, $q, lodash) {
    function initialize() {
        vm.dicoParams = [{libelle: "Sites/" + vm.realTypeUser + "/ComptabilitÃ©/Actif"}, {libelle: "Sites/" + vm.realTypeUser + "/ComptabilitÃ©/RÃ¨glementsEnLigne/Actif"}, {libelle: "Sites/" + vm.realTypeUser + "/ComptabilitÃ©/PortesMonaie/Actif"}];
        var lesPromises = [ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        }), PorteMonnaieService.getPorteMonnaie(vm.typeUser).then(function (reponse) {
            vm.tabPorteMonnaie = reponse.portesMonnaie
        })];
        $q.all(lesPromises).then(function () {
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.dicoParamsToSave = angular.copy(vm.dicoParams), lodash.forEach(vm.tabPorteMonnaie, function (porteMonnaie, key) {
            vm.dicoParamsToSave.push({libelle: "Sites/" + vm.realTypeUser + "/ComptabilitÃ©/PortesMonaie/Affichage/" + porteMonnaie.code}, {libelle: "Sites/" + vm.realTypeUser + "/ComptabilitÃ©/PortesMonaie/Payable/" + porteMonnaie.code}), vm.tabParametres["Sites/" + vm.realTypeUser + "/ComptabilitÃ©/PortesMonaie/Affichage/" + porteMonnaie.code] = porteMonnaie.actif, vm.tabParametres["Sites/" + vm.realTypeUser + "/ComptabilitÃ©/PortesMonaie/Payable/" + porteMonnaie.code] = porteMonnaie.payable
        }), ParametresService.enregistrerParametres(vm.dicoParamsToSave, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.typeUser = $routeParams.typeEntity, vm.disabledForm = !0, vm.tabParametres = {}, "personnels" === vm.typeUser ? vm.realTypeUser = "Personnels" : vm.realTypeUser = "Professeurs", initialize()
}]), angular.module("edadminApp.ParametragesProfesseursPersonnels").controller("AppelProfesseursPersonnelsCtrl", ["Auth", "ParametresService", "ActivitesService", "EDTService", "lodash", "$routeParams", "$uibModal", "$q", function (Auth, ParametresService, ActivitesService, EDTService, lodash, $routeParams, $uibModal, $q) {
    function initialize() {
        vm.dicoParams = [{libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/EmploiDuTemps"}, {libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/RechercheParClasse"}, {libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/AppelPrimaireActif"}, {libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviSmsActif"}, {libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviMsgEDActif"}, {libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviMsgED"}, {libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviSms"}, {libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/AppelEtudeActif"}], "Professeurs" === vm.realTypeUser && vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/Actif"});
        for (var indiceEtab = 0, i = 0; i < vm.tabEtablissements.length; i++) indiceEtab = vm.tabEtablissements[i].id, vm.dicoParams.push({libelle: "FeuilleAppel/AppelEtude/Etablissement_" + indiceEtab + "/Salles"});
        var lesPromises = [ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data, "Professeurs" === vm.realTypeUser && (vm.appelClasseActif = vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/Actif"]), vm.selectionClassesParEDT = vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/EmploiDuTemps"], vm.rechercheParClasse = vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/RechercheParClasse"], vm.appelPrimaireActif = vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/AppelPrimaireActif"], vm.suiviSmsActif = vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviSmsActif"], vm.suiviMsgEDActif = vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviMsgEDActif"], vm.suiviMsgEd = vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviMsgED"], vm.suiviSms = vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviSms"], vm.appelEtudeActif = vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/AppelEtudeActif"]
        }), ActivitesService.getActivites(vm.typeUser).then(function (reponse) {
            vm.tabActivites = reponse.activites
        }), EDTService.getListeSalles().then(function (reponse) {
            vm.tabSalles = reponse.salles
        })];
        vm.promiseContents = $q.all(lesPromises).then(function () {
            alimenteParamEtablissementAppelEtude()
        })
    }

    function alimenteParamEtablissementAppelEtude() {
        for (var indiceEtab = 0, i = 0; i < vm.tabEtablissements.length; i++) {
            indiceEtab = vm.tabEtablissements[i].id;
            var monParamOrigine = angular.copy(vm.tabParametres["FeuilleAppel/AppelEtude/Etablissement_" + indiceEtab + "/Salles"]);
            vm.tabParametres["FeuilleAppel/AppelEtude/Etablissement_" + indiceEtab + "/Salles"] = angular.copy(vm.tabSalles), setSalleAffecter(monParamOrigine, vm.tabParametres["FeuilleAppel/AppelEtude/Etablissement_" + indiceEtab + "/Salles"])
        }
    }

    function setSalleAffecter(paramOrigine, paramDest) {
        angular.isDefined(paramOrigine) && "false" !== paramOrigine.toString() && angular.forEach(paramOrigine.toString().split(";"), function (idSalleOrigine) {
            var param = lodash.find(paramDest, {id: parseInt(idSalleOrigine)});
            angular.isDefined(param) && (param.isAffecte = !0)
        })
    }

    function paramUpdated(param) {
        if (vm.disabledForm = !1, angular.isDefined(param)) {
            if ("selectClasse" === param && !vm.selectionClassesParEDT) {
                var modalInstance = $uibModal.open({
                    templateUrl: "../../scripts/modals/confirm-modal.template.html",
                    controller: "ConfirmModalCtrl",
                    size: "md",
                    resolve: {
                        config: function () {
                            var config = {};
                            return config.title = "DÃ©sactivation de la sÃ©lection des classes", config.message = "<p> Si vous dÃ©sactivez cette option, le suivi des appels par la Vie Scolaire ne sera <strong>pas complÃ¨tement opÃ©rationnel</strong>.</p>", config.confirm = "Valider", config.cancel = "Non", config
                        }
                    }
                });
                modalInstance.result.then(function () {
                    return ""
                }, function () {
                    vm.selectionClassesParEDT = !0
                })
            }
            if ("rechercheClasse" === param && vm.rechercheParClasse) {
                var modalInstanceRecherche = $uibModal.open({
                    templateUrl: "../../scripts/modals/confirm-modal.template.html",
                    controller: "ConfirmModalCtrl",
                    size: "md",
                    resolve: {
                        config: function () {
                            var config = {};
                            return config.title = "Activation de la recherche par classe", config.message = "<p> La possibilitÃ© de recherche par classe peut <strong>altÃ©rer le suivi des appels</strong> par la Vie Scolaire.</p>", config.confirm = "Valider", config.cancel = "Non", config
                        }
                    }
                });
                modalInstanceRecherche.result.then(function () {
                    return ""
                }, function () {
                    vm.rechercheParClasse = !1
                })
            }
        }
    }

    function saveParams() {
        "Professeurs" === vm.realTypeUser && (vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/Actif"] = vm.appelClasseActif), vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/EmploiDuTemps"] = vm.selectionClassesParEDT, vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/RechercheParClasse"] = vm.rechercheParClasse, vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/AppelPrimaireActif"] = vm.appelPrimaireActif, vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviSmsActif"] = vm.suiviSmsActif, vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviMsgEDActif"] = vm.suiviMsgEDActif, vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviSms"] = vm.suiviSms, vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/SuiviMsgED"] = vm.suiviMsgEd, vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/AppelEtudeActif"] = vm.appelEtudeActif, saveParamsAppelEtude(), vm.dicoParamsToSave = angular.copy(vm.dicoParams), lodash.forEach(vm.tabActivites, function (activite, key) {
            vm.dicoParamsToSave.push({libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/Activites/Matin/" + activite.code}), vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/Activites/Matin/" + activite.code] = activite.isSuiviMatin, vm.dicoParamsToSave.push({libelle: "Sites/" + vm.realTypeUser + "/FeuilleAppel/Activites/ApresMidi/" + activite.code}), vm.tabParametres["Sites/" + vm.realTypeUser + "/FeuilleAppel/Activites/ApresMidi/" + activite.code] = activite.isSuiviApresMidi
        }), ParametresService.enregistrerParametres(vm.dicoParamsToSave, vm.tabParametres).then(function () {
            vm.disabledForm = !0, alimenteParamEtablissementAppelEtude()
        })
    }

    function saveParamsAppelEtude() {
        for (var indiceEtab = 0, i = 0; i < vm.tabEtablissements.length; i++) {
            indiceEtab = vm.tabEtablissements[i].id;
            var monParamAppelEtude = angular.copy(vm.tabParametres["FeuilleAppel/AppelEtude/Etablissement_" + indiceEtab + "/Salles"]);
            monParamAppelEtude = lodash(monParamAppelEtude).filter({isAffecte: !0}).map("id").flatten().value().join(";"), vm.tabParametres["FeuilleAppel/AppelEtude/Etablissement_" + indiceEtab + "/Salles"] = monParamAppelEtude
        }
    }

    function getEtablissement2ndDegre() {
        return lodash.filter(Auth.etablissements(), function (etab) {
            return etab.typeetb > 1
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.modeSupervision = Auth.modeSupervision(), vm.typeUser = $routeParams.typeEntity, vm.disabledForm = !0, vm.tabActivites = [], vm.tabSalles = [], vm.tabEtablissements = getEtablissement2ndDegre(), vm.tabParametres = {}, "personnels" === vm.typeUser ? vm.realTypeUser = "Personnels" : vm.realTypeUser = "Professeurs", initialize()
}]), angular.module("edadminApp.ParametragesProfesseursPersonnels").controller("CarnetCorrespondanceProfesseursPersonnelsCtrl", ["ParametresService", "ActivitesService", "Auth", "lodash", "$routeParams", "$uibModal", "$q", "CarnetCorrespondanceService", "Notification", function (ParametresService, ActivitesService, Auth, lodash, $routeParams, $uibModal, $q, CarnetCorrespondanceService, Notification) {
    function initialize() {
        vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/CarnetCorrespondance/Actif"}, {libelle: "Sites/" + vm.realTypeUser + "/CarnetCorrespondance/DemandeSanctionActif"}, {libelle: "Sites/" + vm.realTypeUser + "/CarnetCorrespondance/DemandeIncidentActif"}, {libelle: "Sites/" + vm.realTypeUser + "/CarnetCorrespondance/SaisieCorrespondanceActif"}, {libelle: "Sites/" + vm.realTypeUser + "/CarnetCorrespondance/DemandeSignatureActif"}, {libelle: "Sites/" + vm.realTypeUser + "/CarnetCorrespondance/SuiviActif"}, {libelle: "Sites/" + vm.realTypeUser + "/CarnetCorrespondance/Suivi/SeulPPAuteurModifiable"}, {libelle: "Autorisations/SMS"}), "professeurs" === vm.typeUser && vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/CarnetCorrespondance/TypesCorrespondance"}), ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        }), CarnetCorrespondanceService.getCategoriesSuivi().then(function (data) {
            vm.tabCategoriesSuivi = data.concat(vm.tabCategoriesSuivi)
        }), "professeurs" === vm.typeUser && CarnetCorrespondanceService.getTypesSanction().then(function (data) {
            vm.tabTypesSanction = data.concat(vm.tabTypesSanction)
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.dicoParamsToSave = angular.copy(vm.dicoParams), "professeurs" === vm.typeUser && lodash.forEach(vm.tabTypesSanction, function (typeSanction) {
            vm.dicoParamsToSave.push({libelle: "Sites/" + vm.realTypeUser + "/CarnetCorrespondance/TypesSanction/" + typeSanction.id + "/Actif"}), vm.tabParametres["Sites/" + vm.realTypeUser + "/CarnetCorrespondance/TypesSanction/" + typeSanction.id + "/Actif"] = typeSanction.isActif
        }), ParametresService.enregistrerParametres(vm.dicoParamsToSave, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    function addCategorieSuivi(categorie) {
        CarnetCorrespondanceService.addCategorieSuivi(categorie).then(function (newCategorie) {
            vm.tabCategoriesSuivi.splice(-1, 1), vm.tabCategoriesSuivi.push(newCategorie), vm.tabCategoriesSuivi.push(angular.copy(vm.newCategorieSuivi)), Notification.notify("Carnet de correspondance", "La catÃ©gorie a Ã©tÃ© crÃ©Ã©e avec succÃ¨s", "success", !0)
        }, function (error) {
            Notification.notify("Carnet de correspondance", error.data.message || "Une erreur est survenue", "error", !0)
        })
    }

    function updateCategorieSuivi(categorie) {
        CarnetCorrespondanceService.updateCategorieSuivi(categorie).then(function (data) {
            var iCat = lodash.findIndex(vm.tabCategoriesSuivi, {id: categorie.id});
            iCat > -1 && (vm.tabCategoriesSuivi[iCat] = categorie), Notification.notify("Carnet de correspondance", "La catÃ©gorie a Ã©tÃ© mise Ã  jour avec succÃ¨s", "success", !0)
        }, function (error) {
            Notification.notify("Carnet de correspondance", error.data.message || "Une erreur est survenue", "error", !0)
        })
    }

    function deleteCategorieSuivi(categorie) {
        var callbackFn = function () {
            CarnetCorrespondanceService.deleteCategorieSuivi(categorie.id).then(function (data) {
                lodash.remove(vm.tabCategoriesSuivi, function (cat) {
                    return cat.id === categorie.id
                }), Notification.notify("Carnet de correspondance", "La catÃ©gorie a Ã©tÃ© suprimÃ©e avec succÃ¨s", "success", !0)
            }, function (error) {
                Notification.notify("Carnet de correspondance", error.data.message || "Une erreur est survenue", "error", !0)
            })
        }, modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/confirm-modal.template.html",
            controller: "ConfirmModalCtrl",
            size: "lg",
            resolve: {
                config: function () {
                    var config = {};
                    return config.title = "Suppression d'une categorie de suivi", config.message = "Vous Ãªtes sur le point de supprimer la catÃ©gorie. Continuer ?", config.confirm = "Supprimer", config.cancel = "Non", config
                }
            }
        });
        modalInstance.result.then(callbackFn)
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.addCategorieSuivi = addCategorieSuivi, vm.updateCategorieSuivi = updateCategorieSuivi, vm.deleteCategorieSuivi = deleteCategorieSuivi, vm.typeUser = $routeParams.typeEntity, vm.disabledForm = !0, vm.tabActivites = [], vm.typeUser = $routeParams.typeEntity, "personnels" === vm.typeUser ? vm.realTypeUser = "Personnels" : vm.realTypeUser = "Professeurs", vm.dicoParams = [], vm.tabParametres = {}, vm.tabColorsDispos = ["transparent", "#00ff00", "#80cc33", "#33cc33", "#ffd966", "#ffbf00", "#ffa500", "#ff0000", "#000000", "#ff8000", "#ff6666", "#bfff00", "#1796b0", "#00bfff", "#3399ff", "#0080ff", "#0040ff", "#9999ff", "#bf00ff", "#ff00ff", "#8000ff", "#993300", "#800000", "#ffff00"], vm.newCategorieSuivi = {
        id: 0,
        libelle: "",
        couleur: "transparent"
    }, vm.tabCategoriesSuivi = [angular.copy(vm.newCategorieSuivi)], vm.tabCategoriesSuiviDisplay = vm.tabCategoriesSuivi, vm.tabTypesSanction = [], initialize()
}]), angular.module("edadminApp.ParametragesPersonnels", ["edadminApp.Commun"]).controller("NotesPersonnelCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Personnels/CarnetDeNotes/Moyennes/MoyenneClasse"}, {libelle: "Sites/Personnels/CarnetDeNotes/Moyennes/MoyenneMin"}, {libelle: "Sites/Personnels/CarnetDeNotes/Moyennes/MoyenneMax"}, {libelle: "Sites/Personnels/CarnetDeNotes/Moyennes/MoyenneGenerale"}, {libelle: "Sites/Personnels/CarnetDeNotes/Moyennes/MoyennesSimulation"}, {libelle: "Sites/Personnels/CarnetDeNotes/Moyennes/CoefMatiere"}, {libelle: "Sites/Personnels/CarnetDeNotes/Moyennes/RangEleve"}, {libelle: "Sites/Personnels/CarnetDeNotes/Moyennes/Graphique"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesPersonnels").controller("BadgePersonnelsCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Mobiles/CarteCantine_A/Actif"}, {libelle: "Sites/Mobiles/QRCode/Actif"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesPersonnels").controller("EdtPersonnelCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Personnels/EmploiDuTemps/ReservationSalles/Actif"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesPersonnels").controller("AdministratifPersonnelCtrl", ["ParametresService", function (ParametresService) {
    function initialize() {
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.disabledForm = !0, vm.dicoParams = [{libelle: "Sites/Personnels/RDVPP/Actif"}, {libelle: "Sites/Personnels/RDVPP/Individuel/Actif"}, {libelle: "Sites/Personnels/Visio/Exterieure/Actif"}], vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.Commun").controller("InfosAdminCtrl", ["Auth", "LoginService", "Notification", function (Auth, LoginService, Notification) {
    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        vm.modeSupervision || LoginService.updateCompteAdmin(vm.compteAdmin).then(function (reponse) {
            200 !== reponse.code ? Notification.notify("Echec lors de l'enregistrement", reponse.message, "error", !0) : (Auth.updateTel(vm.compteAdmin.tel), Auth.updateEmail(vm.compteAdmin.adresseMail), vm.disabledForm = !0, Notification.notify("Profil administrateur", "Vos informations ont bien Ã©tÃ© modifiÃ©es !", "success", !0))
        }, function (error) {
            Notification.notify("Echec lors de l'enregistrement", error.message, "error", !0)
        })
    }

    function mdpIdentiques(formInfosConnexion) {
        if (angular.isUndefined(vm.compteAdmin.nouveauMdp) || angular.isUndefined(vm.compteAdmin.mdpConfirm)) return !1;
        if ("" === vm.compteAdmin.nouveauMdp) return !1;
        var MdpIdentiques = formInfosConnexion.mdpAdminConfirm.$modelValue === vm.compteAdmin.nouveauMdp;
        return MdpIdentiques || (formInfosConnexion.$invalid = !0), MdpIdentiques
    }

    var vm = this;
    vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.mdpIdentiques = mdpIdentiques, vm.modeSupervision = Auth.modeSupervision() || !Auth.modeAdmin(), vm.compteAdmin = {
        adresseMail: Auth.email(),
        tel: Auth.tel(),
        nouveauMdp: ""
    }, vm.loginAdmin = Auth.codeOgec(), vm.disabledForm = !0
}]), angular.module("edadminApp.Stats").controller("StatsCtrl", ["$routeParams", "StatsService", "lodash", "$timeout", function ($routeParams, StatsService, lodash, $timeout) {
    function initialize() {
        vm.myPromise = StatsService.getStats(vm.typeEntity).then(function (reponse) {
            vm.dataLoaded = !0, vm.rempliTableauAnnuel(reponse), vm.rempliTableauMensuel(vm.moisSelected), vm.rempliTableauHebdomadaire(), vm.rempliTableauJournalier(), $timeout(function () {
                window.dispatchEvent(new Event("resize"))
            })
        })
    }

    function rempliTableauAnnuel(reponse) {
        vm.labelsYear = ["AoÃ»t " + anneeScolaire, "Septembre " + anneeScolaire, "Octobre " + anneeScolaire, "Novembre " + anneeScolaire, "DÃ©cembre " + anneeScolaire, "Janvier " + (anneeScolaire + 1), "FÃ©vrier " + (anneeScolaire + 1), "Mars " + (anneeScolaire + 1), "Avril " + (anneeScolaire + 1), "Mai " + (anneeScolaire + 1), "Juin " + (anneeScolaire + 1), "Juillet " + (anneeScolaire + 1)], vm.totauxNbConnexionsYearParCible = [];
        var nbreConnexionsAnnuelDefaut = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            tabStatsAnnuellesResponsable = reponse.Responsable, tabStatsAnnuellesConjoint = reponse.Conjoint,
            tabStatsAnnuellesEleve = reponse.Eleve, tabStatsAnnuellesPersonnel = reponse.Personnel,
            tabStatsAnnuellesProfesseur = reponse.Professeur, tabStatsAnnuellesEntreprise = reponse.Entreprise;
        vm.tabStatsBeautifulAnnuellesResponsable = constructTabAnnuel(tabStatsAnnuellesResponsable), vm.tabStatsBeautifulAnnuellesConjoint = constructTabAnnuel(tabStatsAnnuellesConjoint), vm.tabStatsBeautifulAnnuellesEleve = constructTabAnnuel(tabStatsAnnuellesEleve), vm.tabStatsBeautifulAnnuellesPersonnel = constructTabAnnuel(tabStatsAnnuellesPersonnel), vm.tabStatsBeautifulAnnuellesProfesseur = constructTabAnnuel(tabStatsAnnuellesProfesseur), vm.tabStatsBeautifulAnnuellesEntreprise = constructTabAnnuel(tabStatsAnnuellesEntreprise), vm.dataYear.push(lodash.isEmpty(vm.tabStatsBeautifulAnnuellesResponsable.tabStatsConnexionsAnnuelles) ? nbreConnexionsAnnuelDefaut : vm.tabStatsBeautifulAnnuellesResponsable.tabStatsConnexionsAnnuelles), vm.dataYear.push(lodash.isEmpty(vm.tabStatsBeautifulAnnuellesConjoint.tabStatsConnexionsAnnuelles) ? nbreConnexionsAnnuelDefaut : vm.tabStatsBeautifulAnnuellesConjoint.tabStatsConnexionsAnnuelles), vm.dataYear.push(lodash.isEmpty(vm.tabStatsBeautifulAnnuellesEleve.tabStatsConnexionsAnnuelles) ? nbreConnexionsAnnuelDefaut : vm.tabStatsBeautifulAnnuellesEleve.tabStatsConnexionsAnnuelles), vm.dataYear.push(lodash.isEmpty(vm.tabStatsBeautifulAnnuellesPersonnel.tabStatsConnexionsAnnuelles) ? nbreConnexionsAnnuelDefaut : vm.tabStatsBeautifulAnnuellesPersonnel.tabStatsConnexionsAnnuelles), vm.dataYear.push(lodash.isEmpty(vm.tabStatsBeautifulAnnuellesProfesseur.tabStatsConnexionsAnnuelles) ? nbreConnexionsAnnuelDefaut : vm.tabStatsBeautifulAnnuellesProfesseur.tabStatsConnexionsAnnuelles), vm.dataYear.push(lodash.isEmpty(vm.tabStatsBeautifulAnnuellesEntreprise.tabStatsConnexionsAnnuelles) ? nbreConnexionsAnnuelDefaut : vm.tabStatsBeautifulAnnuellesEntreprise.tabStatsConnexionsAnnuelles), angular.isUndefined(reponse.totalConnexionResponsable) ? vm.totauxNbConnexionsYearParCible[0] = 0 : vm.totauxNbConnexionsYearParCible[0] = reponse.totalConnexionResponsable, angular.isUndefined(reponse.totalConnexionConjoint) ? vm.totauxNbConnexionsYearParCible[1] = 0 : vm.totauxNbConnexionsYearParCible[1] = reponse.totalConnexionConjoint, angular.isUndefined(reponse.totalConnexionEleve) ? vm.totauxNbConnexionsYearParCible[2] = 0 : vm.totauxNbConnexionsYearParCible[2] = reponse.totalConnexionEleve, angular.isUndefined(reponse.totalConnexionPersonnel) ? vm.totauxNbConnexionsYearParCible[3] = 0 : vm.totauxNbConnexionsYearParCible[3] = reponse.totalConnexionPersonnel, angular.isUndefined(reponse.totalConnexionProfesseur) ? vm.totauxNbConnexionsYearParCible[4] = 0 : vm.totauxNbConnexionsYearParCible[4] = reponse.totalConnexionProfesseur, angular.isUndefined(reponse.totalConnexionEntreprise) ? vm.totauxNbConnexionsYearParCible[5] = 0 : vm.totauxNbConnexionsYearParCible[5] = reponse.totalConnexionEntreprise, vm.totauxNbConnexionsYearParCible[6] = vm.totauxNbConnexionsYearParCible[0] + vm.totauxNbConnexionsYearParCible[1] + vm.totauxNbConnexionsYearParCible[2] + vm.totauxNbConnexionsYearParCible[3] + vm.totauxNbConnexionsYearParCible[4] + vm.totauxNbConnexionsYearParCible[5]
    }

    function constructTabAnnuel(tabStats) {
        var tabIdMois = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7], dernierElemTraite = 0, dernierMoisTraite = 0,
            newTabs = {tabAnnuel: [], tabMensuel: []}, tabonlyStatsConnexionParMois = [], i = 0;
        if (angular.isDefined(tabStats)) for (; i < tabIdMois.length;) if (angular.isDefined(tabStats[dernierElemTraite])) {
            for (var trouve = !1; !trouve;) if (tabStats[dernierElemTraite].mois === tabIdMois[i]) {
                if (newTabs.tabAnnuel.push({
                    nbConnexion: tabStats[dernierElemTraite].nbConnexions,
                    mois: tabStats[dernierElemTraite].mois,
                    statsJours: tabStats[dernierElemTraite].jours
                }), tabonlyStatsConnexionParMois.push(tabStats[dernierElemTraite].nbConnexions), dernierMoisTraite = tabStats[dernierElemTraite].mois, dernierElemTraite++, trouve = !0, i++, i > tabIdMois.length || trouve) break
            } else if (newTabs.tabAnnuel.push({
                nbConnexion: 0,
                mois: tabIdMois[i],
                statsJours: []
            }), tabonlyStatsConnexionParMois.push(0), i++, i > tabIdMois.length) break
        } else if (newTabs.tabAnnuel.push({
            nbConnexion: 0,
            mois: tabIdMois[i],
            statsJours: []
        }), tabonlyStatsConnexionParMois.push(0), i++, i > tabIdMois.length) break;
        for (var j = 0; j < newTabs.tabAnnuel.length; j++) {
            var tabJours = newTabs.tabAnnuel[j].statsJours, moisActuel = moment().month(tabIdMois[j] - 1);
            moisActuel = moisActuel.set("date", 1);
            var nbDays = moisActuel.daysInMonth(), tabonlyStatsConnexionParJour = [], tabStatsConnexionParJour = [],
                tabJoursComplet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                indiceJour = 0, dernierJourTraite = 0, dernierElemJourTraite = 0;
            if (tabJours.length > 0) for (; nbDays > indiceJour;) if (angular.isDefined(tabJours[dernierElemJourTraite])) for (var trouveJour = !1; !trouveJour;) {
                if (tabJours[dernierElemJourTraite].jour === indiceJour + 1) {
                    tabonlyStatsConnexionParJour.push(tabJours[dernierElemJourTraite].nbConnexions), tabStatsConnexionParJour.push({
                        numeroJour: tabJours[dernierElemJourTraite].jour,
                        connexions: tabJours[dernierElemJourTraite].nbConnexions,
                        statsHeures: tabJours[dernierElemJourTraite].heures
                    }), dernierJourTraite = tabJours[dernierElemJourTraite].jour, dernierElemJourTraite++, indiceJour++, trouveJour = !0;
                    break
                }
                if (tabonlyStatsConnexionParJour.push(0), tabStatsConnexionParJour.push({
                    numeroJour: indiceJour + 1,
                    connexions: 0,
                    statsHeures: []
                }), indiceJour++, indiceJour > nbDays) break
            } else tabonlyStatsConnexionParJour.push(0), tabStatsConnexionParJour.push({
                numeroJour: tabJoursComplet[indiceJour],
                connexions: 0,
                statsHeures: []
            }), indiceJour++;
            newTabs.tabAnnuel[j].statsJours = tabonlyStatsConnexionParJour, newTabs.tabAnnuel[j].statsJoursComplet = tabStatsConnexionParJour
        }
        return {tabStatsConnexionsAnnuelles: tabonlyStatsConnexionParMois, tabStatsAnnuelles: newTabs.tabAnnuel}
    }

    function rempliTableauMensuel(selectedDate) {
        var moisActuel = moment(selectedDate.value, "YYYY-MM-DD"), nbDays = moisActuel.daysInMonth(),
            firstDayOfMonth = moisActuel.startOf("month"), nbreConnexionsMensuelleDefaut = [];
        vm.labelsMonth = [];
        for (var i = 0; nbDays > i; i++) {
            nbreConnexionsMensuelleDefaut.push(0);
            var dayActuel = {}, dayActuelFormate = "";
            dayActuel = i > 0 ? firstDayOfMonth.add(1, "day") : firstDayOfMonth, (6 === dayActuel.days() || 0 === dayActuel.days()) && (dayActuelFormate = dayActuel.format("ddd") + " "), dayActuelFormate += dayActuel.format("D MMM"), vm.labelsMonth.push(dayActuelFormate)
        }
        var numeroMois = moisActuel.month() + 1;
        vm.dataMonth = [], vm.totauxNbConnexionsMoisParCible = [];
        var tabStatsMoisResponsable = lodash.find(vm.tabStatsBeautifulAnnuellesResponsable.tabStatsAnnuelles, function (elem) {
                return elem.mois === numeroMois
            }),
            tabStatsMoisConjoint = lodash.find(vm.tabStatsBeautifulAnnuellesConjoint.tabStatsAnnuelles, function (elem) {
                return elem.mois === numeroMois
            }), tabStatsMoisEleve = lodash.find(vm.tabStatsBeautifulAnnuellesEleve.tabStatsAnnuelles, function (elem) {
                return elem.mois === numeroMois
            }),
            tabStatsMoisPersonnel = lodash.find(vm.tabStatsBeautifulAnnuellesPersonnel.tabStatsAnnuelles, function (elem) {
                return elem.mois === numeroMois
            }),
            tabStatsMoisProfesseur = lodash.find(vm.tabStatsBeautifulAnnuellesProfesseur.tabStatsAnnuelles, function (elem) {
                return elem.mois === numeroMois
            }),
            tabStatsMoisEntreprise = lodash.find(vm.tabStatsBeautifulAnnuellesEntreprise.tabStatsAnnuelles, function (elem) {
                return elem.mois === numeroMois
            });
        angular.isUndefined(tabStatsMoisResponsable) ? tabStatsMoisResponsable = {
            statsJours: [],
            nbConnexion: 0
        } : "", angular.isUndefined(tabStatsMoisConjoint) ? tabStatsMoisConjoint = {
            statsJours: [],
            nbConnexion: 0
        } : "", angular.isUndefined(tabStatsMoisEleve) ? tabStatsMoisEleve = {
            statsJours: [],
            nbConnexion: 0
        } : "", angular.isUndefined(tabStatsMoisPersonnel) ? tabStatsMoisPersonnel = {
            statsJours: [],
            nbConnexion: 0
        } : "", angular.isUndefined(tabStatsMoisProfesseur) ? tabStatsMoisProfesseur = {
            statsJours: [],
            nbConnexion: 0
        } : "", angular.isUndefined(tabStatsMoisEntreprise) ? tabStatsMoisEntreprise = {
            statsJours: [],
            nbConnexion: 0
        } : "", vm.dataMonth.push(lodash.isEmpty(tabStatsMoisResponsable.statsJours) ? nbreConnexionsMensuelleDefaut : tabStatsMoisResponsable.statsJours), vm.dataMonth.push(lodash.isEmpty(tabStatsMoisConjoint.statsJours) ? nbreConnexionsMensuelleDefaut : tabStatsMoisConjoint.statsJours), vm.dataMonth.push(lodash.isEmpty(tabStatsMoisEleve.statsJours) ? nbreConnexionsMensuelleDefaut : tabStatsMoisEleve.statsJours), vm.dataMonth.push(lodash.isEmpty(tabStatsMoisPersonnel.statsJours) ? nbreConnexionsMensuelleDefaut : tabStatsMoisPersonnel.statsJours), vm.dataMonth.push(lodash.isEmpty(tabStatsMoisProfesseur.statsJours) ? nbreConnexionsMensuelleDefaut : tabStatsMoisProfesseur.statsJours), vm.dataMonth.push(lodash.isEmpty(tabStatsMoisEntreprise.statsJours) ? nbreConnexionsMensuelleDefaut : tabStatsMoisEntreprise.statsJours), vm.totauxNbConnexionsMoisParCible.push(tabStatsMoisResponsable.nbConnexion), vm.totauxNbConnexionsMoisParCible.push(tabStatsMoisConjoint.nbConnexion), vm.totauxNbConnexionsMoisParCible.push(tabStatsMoisEleve.nbConnexion), vm.totauxNbConnexionsMoisParCible.push(tabStatsMoisPersonnel.nbConnexion), vm.totauxNbConnexionsMoisParCible.push(tabStatsMoisProfesseur.nbConnexion), vm.totauxNbConnexionsMoisParCible.push(tabStatsMoisEntreprise.nbConnexion), vm.totauxNbConnexionsMoisParCible.push(tabStatsMoisResponsable.nbConnexion + tabStatsMoisConjoint.nbConnexion + tabStatsMoisEleve.nbConnexion + tabStatsMoisPersonnel.nbConnexion + tabStatsMoisProfesseur.nbConnexion + tabStatsMoisEntreprise.nbConnexion)
    }

    function rempliTableauHebdomadaire() {
        vm.labelsHebdo = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
        var nbreConnexionsHebdoDefaut = [0, 0, 0, 0, 0, 0, 0];
        vm.dataHebdo = [], vm.totauxNbConnexionsHebdoParCible = [];
        var tabNbConnexionsSemaineResponsable = constructTabConnexionsHebdomadaire(vm.tabStatsBeautifulAnnuellesResponsable.tabStatsAnnuelles),
            tabNbConnexionsSemaineConjoint = constructTabConnexionsHebdomadaire(vm.tabStatsBeautifulAnnuellesConjoint.tabStatsAnnuelles),
            tabNbConnexionsSemaineEleve = constructTabConnexionsHebdomadaire(vm.tabStatsBeautifulAnnuellesEleve.tabStatsAnnuelles),
            tabNbConnexionsSemainePersonnel = constructTabConnexionsHebdomadaire(vm.tabStatsBeautifulAnnuellesPersonnel.tabStatsAnnuelles),
            tabNbConnexionsSemaineProfesseur = constructTabConnexionsHebdomadaire(vm.tabStatsBeautifulAnnuellesProfesseur.tabStatsAnnuelles),
            tabNbConnexionsSemaineEntreprise = constructTabConnexionsHebdomadaire(vm.tabStatsBeautifulAnnuellesEntreprise.tabStatsAnnuelles);
        vm.dataHebdo.push(lodash.isEmpty(tabNbConnexionsSemaineResponsable.tabConnexionSemaine) ? nbreConnexionsHebdoDefaut : tabNbConnexionsSemaineResponsable.tabConnexionSemaine), vm.dataHebdo.push(lodash.isEmpty(tabNbConnexionsSemaineConjoint.tabConnexionSemaine) ? nbreConnexionsHebdoDefaut : tabNbConnexionsSemaineConjoint.tabConnexionSemaine), vm.dataHebdo.push(lodash.isEmpty(tabNbConnexionsSemaineEleve.tabConnexionSemaine) ? nbreConnexionsHebdoDefaut : tabNbConnexionsSemaineEleve.tabConnexionSemaine), vm.dataHebdo.push(lodash.isEmpty(tabNbConnexionsSemainePersonnel.tabConnexionSemaine) ? nbreConnexionsHebdoDefaut : tabNbConnexionsSemainePersonnel.tabConnexionSemaine), vm.dataHebdo.push(lodash.isEmpty(tabNbConnexionsSemaineProfesseur.tabConnexionSemaine) ? nbreConnexionsHebdoDefaut : tabNbConnexionsSemaineProfesseur.tabConnexionSemaine), vm.dataHebdo.push(lodash.isEmpty(tabNbConnexionsSemaineEntreprise.tabConnexionSemaine) ? nbreConnexionsHebdoDefaut : tabNbConnexionsSemaineEntreprise.tabConnexionSemaine), vm.totauxNbConnexionsHebdoParCible.push(tabNbConnexionsSemaineResponsable.nbConnexionsTotal), vm.totauxNbConnexionsHebdoParCible.push(tabNbConnexionsSemaineConjoint.nbConnexionsTotal), vm.totauxNbConnexionsHebdoParCible.push(tabNbConnexionsSemaineEleve.nbConnexionsTotal), vm.totauxNbConnexionsHebdoParCible.push(tabNbConnexionsSemainePersonnel.nbConnexionsTotal), vm.totauxNbConnexionsHebdoParCible.push(tabNbConnexionsSemaineProfesseur.nbConnexionsTotal), vm.totauxNbConnexionsHebdoParCible.push(tabNbConnexionsSemaineEntreprise.nbConnexionsTotal), vm.totauxNbConnexionsHebdoParCible.push(tabNbConnexionsSemaineResponsable.nbConnexionsTotal + tabNbConnexionsSemaineConjoint.nbConnexionsTotal + tabNbConnexionsSemaineEleve.nbConnexionsTotal + tabNbConnexionsSemainePersonnel.nbConnexionsTotal + tabNbConnexionsSemaineProfesseur.nbConnexionsTotal + tabNbConnexionsSemaineEntreprise.nbConnexionsTotal)
    }

    function constructTabConnexionsHebdomadaire(tabStatsHebdo) {
        var numeroMoisActuel = moment().month() + 1, premierJourSemaineActuelle = moment().day(1),
            dernierJourSemaineActuelle = moment().day(7);
        premierJourSemaineActuelle = premierJourSemaineActuelle.format("D") - 1, dernierJourSemaineActuelle = dernierJourSemaineActuelle.format("D") - 1;
        var tabStatsMoisResponsable = lodash.find(tabStatsHebdo, function (elem) {
            return elem.mois === numeroMoisActuel
        }), tabnbConnexionSemaine = [], totalConnexions = 0;
        return angular.isDefined(tabStatsMoisResponsable) && lodash.forEach(tabStatsMoisResponsable.statsJours, function (value, key) {
            key >= premierJourSemaineActuelle && dernierJourSemaineActuelle >= key && (tabnbConnexionSemaine.push(value), totalConnexions += value)
        }), {tabConnexionSemaine: tabnbConnexionSemaine, nbConnexionsTotal: totalConnexions}
    }

    function rempliTableauJournalier() {
        vm.labelsHeures = [], vm.dataHeures = [], vm.totauxNbConnexionsJourParCible = [];
        for (var nbreConnexionsJournalierDefaut = [], i = 0; 24 > i; i++) vm.labelsHeures.push(i + "h"), nbreConnexionsJournalierDefaut.push(0);
        var tabNbConnexionsJourResponsable = constructTabConnexionsJournaliere(vm.tabStatsBeautifulAnnuellesResponsable.tabStatsAnnuelles),
            tabNbConnexionsJourConjoint = constructTabConnexionsJournaliere(vm.tabStatsBeautifulAnnuellesConjoint.tabStatsAnnuelles),
            tabNbConnexionsJourEleve = constructTabConnexionsJournaliere(vm.tabStatsBeautifulAnnuellesEleve.tabStatsAnnuelles),
            tabNbConnexionsJourPersonnel = constructTabConnexionsJournaliere(vm.tabStatsBeautifulAnnuellesPersonnel.tabStatsAnnuelles),
            tabNbConnexionsJourProfesseur = constructTabConnexionsJournaliere(vm.tabStatsBeautifulAnnuellesProfesseur.tabStatsAnnuelles),
            tabNbConnexionsJourEntreprise = constructTabConnexionsJournaliere(vm.tabStatsBeautifulAnnuellesEntreprise.tabStatsAnnuelles);
        vm.dataHeures.push(lodash.isEmpty(tabNbConnexionsJourResponsable.tabConnexionsHeure) ? nbreConnexionsJournalierDefaut : tabNbConnexionsJourResponsable.tabConnexionsHeure), vm.dataHeures.push(lodash.isEmpty(tabNbConnexionsJourConjoint.tabConnexionsHeure) ? nbreConnexionsJournalierDefaut : tabNbConnexionsJourConjoint.tabConnexionsHeure), vm.dataHeures.push(lodash.isEmpty(tabNbConnexionsJourEleve.tabConnexionsHeure) ? nbreConnexionsJournalierDefaut : tabNbConnexionsJourEleve.tabConnexionsHeure), vm.dataHeures.push(lodash.isEmpty(tabNbConnexionsJourPersonnel.tabConnexionsHeure) ? nbreConnexionsJournalierDefaut : tabNbConnexionsJourPersonnel.tabConnexionsHeure), vm.dataHeures.push(lodash.isEmpty(tabNbConnexionsJourProfesseur.tabConnexionsHeure) ? nbreConnexionsJournalierDefaut : tabNbConnexionsJourProfesseur.tabConnexionsHeure), vm.dataHeures.push(lodash.isEmpty(tabNbConnexionsJourEntreprise.tabConnexionsHeure) ? nbreConnexionsJournalierDefaut : tabNbConnexionsJourEntreprise.tabConnexionsHeure), vm.totauxNbConnexionsJourParCible.push(tabNbConnexionsJourResponsable.nbConnexionsTotal), vm.totauxNbConnexionsJourParCible.push(tabNbConnexionsJourConjoint.nbConnexionsTotal), vm.totauxNbConnexionsJourParCible.push(tabNbConnexionsJourEleve.nbConnexionsTotal), vm.totauxNbConnexionsJourParCible.push(tabNbConnexionsJourPersonnel.nbConnexionsTotal), vm.totauxNbConnexionsJourParCible.push(tabNbConnexionsJourProfesseur.nbConnexionsTotal), vm.totauxNbConnexionsJourParCible.push(tabNbConnexionsJourEntreprise.nbConnexionsTotal), vm.totauxNbConnexionsJourParCible.push(tabNbConnexionsJourResponsable.nbConnexionsTotal + tabNbConnexionsJourConjoint.nbConnexionsTotal + tabNbConnexionsJourEleve.nbConnexionsTotal + tabNbConnexionsJourPersonnel.nbConnexionsTotal + tabNbConnexionsJourProfesseur.nbConnexionsTotal + tabNbConnexionsJourEntreprise.nbConnexionsTotal)
    }

    function constructTabConnexionsJournaliere(tabStatsJour) {
        var numeroMoisActuel = moment().month() + 1, numeroJourActuel = moment().format("D"),
            tabStatsMoisCible = lodash.find(tabStatsJour, function (elem) {
                return elem.mois === numeroMoisActuel
            });
        if (angular.isDefined(tabStatsMoisCible)) var tabStatsJourCible = lodash.find(tabStatsMoisCible.statsJoursComplet, function (elemJour) {
            return elemJour.numeroJour === numeroJourActuel, elemJour.numeroJour === parseInt(numeroJourActuel)
        });
        var indiceHeure = 0, dernierElemTraite = 0, derniereHeureTraite = 0,
            tabHeures = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            newTabs = [], totalConnexions = 0;
        if (angular.isDefined(tabStatsJourCible)) for (; indiceHeure < tabHeures.length;) if (angular.isDefined(tabStatsJourCible.statsHeures[dernierElemTraite])) for (var trouve = !1; !trouve;) {
            if (tabStatsJourCible.statsHeures[dernierElemTraite].heure === tabHeures[indiceHeure]) {
                newTabs.push(tabStatsJourCible.statsHeures[dernierElemTraite].nbConnexions), totalConnexions += tabStatsJourCible.statsHeures[dernierElemTraite].nbConnexions, derniereHeureTraite = tabStatsJourCible.statsHeures[dernierElemTraite].heure, dernierElemTraite++, trouve = !0, indiceHeure++;
                break
            }
            newTabs.push(0), indiceHeure++
        } else if (newTabs.push(0), indiceHeure++, indiceHeure > tabHeures.length) break;
        return {tabConnexionsHeure: newTabs, nbConnexionsTotal: totalConnexions}
    }

    var vm = this;
    vm.initialize = initialize, vm.constructTabAnnuel = constructTabAnnuel, vm.constructTabConnexionsHebdomadaire = constructTabConnexionsHebdomadaire, vm.constructTabConnexionsJournaliere = constructTabConnexionsJournaliere, vm.rempliTableauAnnuel = rempliTableauAnnuel, vm.rempliTableauMensuel = rempliTableauMensuel, vm.rempliTableauHebdomadaire = rempliTableauHebdomadaire, vm.rempliTableauJournalier = rempliTableauJournalier, vm.typeEntity = $routeParams.typeEntity, vm.series = ["Responsable", "Conjoint", "Ã‰lÃ¨ve", "Personnel", "Professeur", "Entreprise"], vm.dataYear = [], vm.dataLoaded = !1;
    var ladate = new Date, anneeActuelle = ladate.getFullYear(), anneeScolaire = anneeActuelle;
    ladate.getMonth() < 7 && (anneeScolaire = anneeActuelle - 1), vm.moisCalendrier = [{
        value: anneeScolaire + "-08-01",
        label: moment(anneeScolaire + "-08-01").format("MMMM YYYY"),
        lemois: "08"
    }, {
        value: anneeScolaire + "-09-01",
        label: moment(anneeScolaire + "-09-01").format("MMMM YYYY"),
        lemois: "09"
    }, {
        value: anneeScolaire + "-10-01",
        label: moment(anneeScolaire + "-10-01").format("MMMM YYYY"),
        lemois: "10"
    }, {
        value: anneeScolaire + "-11-01",
        label: moment(anneeScolaire + "-11-01").format("MMMM YYYY"),
        lemois: "11"
    }, {
        value: anneeScolaire + "-12-01",
        label: moment(anneeScolaire + "-12-01").format("MMMM YYYY"),
        lemois: "12"
    }, {
        value: anneeScolaire + 1 + "-01-01",
        label: moment(anneeScolaire + 1 + "-01-01").format("MMMM YYYY"),
        lemois: "01"
    }, {
        value: anneeScolaire + 1 + "-02-01",
        label: moment(anneeScolaire + 1 + "-02-01").format("MMMM YYYY"),
        lemois: "02"
    }, {
        value: anneeScolaire + 1 + "-03-01",
        label: moment(anneeScolaire + 1 + "-03-01").format("MMMM YYYY"),
        lemois: "03"
    }, {
        value: anneeScolaire + 1 + "-04-01",
        label: moment(anneeScolaire + 1 + "-04-01").format("MMMM YYYY"),
        lemois: "04"
    }, {
        value: anneeScolaire + 1 + "-05-01",
        label: moment(anneeScolaire + 1 + "-05-01").format("MMMM YYYY"),
        lemois: "05"
    }, {
        value: anneeScolaire + 1 + "-06-01",
        label: moment(anneeScolaire + 1 + "-06-01").format("MMMM YYYY"),
        lemois: "06"
    }, {
        value: anneeScolaire + 1 + "-07-01",
        label: moment(anneeScolaire + 1 + "-07-01").format("MMMM YYYY"),
        lemois: "07"
    }];
    var aujourdhui = moment().format("YYYY-MM");
    vm.moisSelected = {
        value: moment(aujourdhui + "-01").format("YYYY-MM-DD"),
        label: moment(aujourdhui + "-01").format("MMMM YYYY"),
        lemois: moment(aujourdhui + "-01").format("MM")
    }, initialize()
}]).config(["ChartJsProvider", function (ChartJsProvider) {
    ChartJsProvider.setOptions({colours: ["#97bbcd", "#9a99ff", "#f7464a", "#46bfbd", "#234ca5", "#0f8fd1"]})
}]), angular.module("edadminApp.Supervision", ["edadminApp.Commun"]).controller("SupervisionCtrl", ["$routeParams", "$location", "SupervisionService", "Utils", "Settings", "Notification", "IdentifiantsUtilisateursService", "$uibModal", "Auth", function ($routeParams, $location, SupervisionService, Utils, Settings, Notification, IdentifiantsUtilisateursService, $uibModal, Auth) {
    function initialize() {
        "professeurs" === vm.typeEntity || "personnels" === vm.typeEntity || "entreprises" === vm.typeEntity ? (vm.minCaractSearch = 0, searchUsers()) : vm.allIsLoaded = !0
    }

    function getTypeUser(typeUser) {
        return "familles" === vm.typeEntity && (vm.shortTypeUser = Utils.translateType(typeUser)), vm.shortTypeUser
    }

    function getVersion() {
        return $location.host().indexOf("2016") > 0 ? "2016" : ""
    }

    function accesSupervisionMobile(idUser, nomUser, prenomUser) {
        hideAccesOrigine(), SupervisionService.getIdentifiantsMobile(idUser, vm.shortTypeUser).then(function (reponse) {
            vm.identifiantMobile = reponse.data.identifiant, vm.mdpMobile = reponse.data.mdp, vm.accessTokenQR = reponse.data.at, vm.lapersonne = nomUser + " " + prenomUser
        }, function (error) {
            Notification.notify("Une erreur est survenue", error.message, "error", !0)
        })
    }

    function accesCompteOrigineED(typeUser, idUser, nomUser, prenomUser) {
        hideAccesMobile();
        var courtType = Utils.translateType(typeUser);
        IdentifiantsUtilisateursService.getCompteOrigineED(courtType, idUser).then(function (reponse) {
            vm.edNomUtilisateurOrigine = reponse.data.edNomUtilisateurOrigine, vm.edMotDePasseOrigine = reponse.data.edMotDePasseOrigine, vm.accessTokenQR = reponse.data.at, vm.lapersonneorigine = nomUser + " " + prenomUser
        }, function (error) {
            Notification.notify("Une erreur est survenue", error.message, "error", !0)
        })
    }

    function searchUsers(isSubmit) {
        if ("familles" === vm.typeEntity || "eleves" === vm.typeEntity) {
            if (vm.querySearch.length < vm.minCaractSearch) return;
            vm.allIsLoaded = !1
        }
        (angular.isUndefined(isSubmit) || "familles" === vm.typeEntity || "eleves" === vm.typeEntity) && (vm.myPromise = SupervisionService.getUtilisateurs(vm.typeEntity, vm.querySearch).then(function (reponse) {
            vm.tabUsers = reponse.utilisateurs, vm.allIsLoaded = !0
        }, function (error) {
            angular.isDefined(error.data) ? Notification.notify("Recherche utilisateurs", error.data.message, "error", !0) : Notification.notify("Recherche utilisateurs", "Une erreur est survenue lors de l'execution du programme !", "error", !0)
        }))
    }

    function choixReinitLogins(user) {
        var configModal = {
            titreModale: "RÃ©initialisation des identifiants de connexion pour <strong>" + user.nom + " " + user.prenom + "</strong>",
            libelleFirstBtn: "RÃ©initialiser les identifiants de connexion",
            libelleSecondBtn: "Demander le changement de mot de passe",
            userCurrent: user,
            longType: ""
        }, modalInstance = $uibModal.open({
            templateUrl: "modules/parametrages-generaux/modales/modale-choix-type-reinit-mdp.html",
            controller: "ModaleChoixTypeReinitCtrl",
            controllerAs: "ctrlModaleChoixTypeR",
            size: "lg",
            keyboard: !1,
            backdrop: "static",
            resolve: {
                configModal: function () {
                    return configModal
                }
            }
        });
        modalInstance.result.then(function (typeReinit) {
            "delete" === typeReinit && (user.dejaConnecte = !1)
        })
    }

    function hideAccesMobile() {
        vm.identifiantMobile = "", vm.mdpMobile = "", vm.lapersonne = ""
    }

    function hideAccesOrigine() {
        vm.edNomUtilisateurOrigine = "", vm.edMotDePasseOrigine = "", vm.lapersonneorigine = ""
    }

    function formateDate(strDate) {
        return moment(strDate).format("dddd DD MMMM YYYY")
    }

    function getDateDerniereModifMdp(utilisateur) {
        var strJour = {
            0: "aujourd'hui",
            1: utilisateur.nbJourDerniereModifMdp + " jour",
            autres: utilisateur.nbJourDerniereModifMdp + " jours"
        }, keyJour = utilisateur.nbJourDerniereModifMdp > 1 ? "autres" : utilisateur.nbJourDerniereModifMdp.toString();
        return 'DerniÃ¨re modification <em class="help-block">le ' + formateDate(utilisateur.dateModifMdp) + "</em> (" + strJour[keyJour] + ")"
    }

    var vm = this;
    vm.initialize = initialize, vm.getTypeUser = getTypeUser, vm.getVersion = getVersion, vm.accesSupervisionMobile = accesSupervisionMobile, vm.accesCompteOrigineED = accesCompteOrigineED, vm.searchUsers = searchUsers, vm.hideAccesMobile = hideAccesMobile, vm.hideAccesOrigine = hideAccesOrigine, vm.choixReinitLogins = choixReinitLogins, vm.formateDate = formateDate, vm.getDateDerniereModifMdp = getDateDerniereModifMdp, vm.typeEntity = $routeParams.typeEntity, vm.shortTypeUser = Utils.translateType(vm.typeEntity), vm.settings = Settings, vm.modeSupervision = Auth.modeSupervision(), vm.autofocus = !0, vm.tabUsers = [], vm.minCaractSearch = 2, vm.querySearch = "", vm.currentPage = 1, vm.itemParPage = 15, initialize()
}]), angular.module("edadminApp.Commun").factory("Auth", ["$sessionStorage", "$rootScope", "Settings", "$http", "$q", "EDHttp", "EdClusterService", "$filter", "CacheService", "Utils", function ($sessionStorage, $rootScope, Settings, $http, $q, EDHttp, EdClusterService, $filter, CacheService, Utils) {
    var AuthService = {}, currentUser = {};
    return AuthService.socketToken = function () {
        return currentUser.socketToken
    }, AuthService.username = function () {
        return currentUser.identifiant
    }, AuthService.idUser = function () {
        return currentUser.id
    }, AuthService.typeUser = function () {
        return currentUser.type
    }, AuthService.modeAdmin = function () {
        return "A" === currentUser.type
    }, AuthService.modeSupervision = function () {
        return angular.isDefined(currentUser.modeSupervision) ? currentUser.modeSupervision : !1
    }, AuthService.tel = function () {
        return currentUser.portable
    }, AuthService.email = function () {
        return currentUser.email
    }, AuthService.codeOgec = function () {
        return currentUser.codeOgec
    }, AuthService.isModeRestreint = function () {
        return currentUser.isModeRestreint
    }, AuthService.isCodeOgecForPrerelease = function () {
        return "073T2019" === currentUser.codeOgec || "073TEST9" === currentUser.codeOgec || "073TEDV5" === currentUser.codeOgec || "0910812N" === currentUser.codeOgec || "073TEST3" === currentUser.codeOgec
    }, AuthService.isCodeOgecForDevelopment = function () {
        return "073T2019" === currentUser.codeOgec || "073FUTUR" === currentUser.codeOgec || "013APLON" === currentUser.codeOgec || "073TJOEL" === currentUser.codeOgec
    }, AuthService.parametrageParEtablissement = function () {
        return currentUser.parametrageMultiEtab
    }, AuthService.etablissements = function () {
        return currentUser.etablissements
    }, AuthService.token = function () {
        return $sessionStorage.token
    }, AuthService.messagesMaintenance = function () {
        return currentUser.messagesMaintenance
    }, AuthService.cToken = function () {
        return $filter("base64encode")(currentUser.codeOgec)
    }, AuthService.dateFinModeEte = function () {
        return currentUser.dateFinModeEte
    }, AuthService.parametragesRNE = function (keyParam) {
        var lParams = currentUser.parametragesRNE;
        return angular.isDefined(lParams) && keyParam ? lParams[keyParam] : lParams
    }, AuthService.updateToken = function (newToken) {
        $sessionStorage.token = newToken
    }, AuthService.updateParametrageParEtablissement = function (newValue) {
        currentUser.parametrageMultiEtab = newValue
    }, AuthService.updateEmail = function (newMail) {
        currentUser.email = newMail
    }, AuthService.updateTel = function (newTel) {
        currentUser.portable = newTel
    }, AuthService.updateDateFinModeEte = function (newMMJJ, newMMJJProf) {
        currentUser.dateFinModeEte = {fe: newMMJJ, p: newMMJJProf}
    }, AuthService.isAuthenticated = function () {
        return "undefined" != typeof currentUser && ("undefined" != typeof currentUser.codeOgec || "undefined" != typeof currentUser.email)
    }, AuthService.logout = function () {
        EdClusterService.profileDisconnect(), $sessionStorage.$reset(), CacheService.removeAll(), currentUser = {}
    }, AuthService.classes = function () {
        var defer = $q.defer(), data = {};
        return new EDHttp({method: "GET", url: "classes", data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, AuthService.login = function (user) {
        var defer = $q.defer();
        return $http({
            method: "POST",
            url: Settings.allSettings().apiUri + "login" + Settings.allSettings().apiExtension,
            data: user,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).success(function (user) {
            return user.data.etablissements.length <= 0 && 202 !== user.code ? void defer.reject({etablissementsDisponible: 0}) : (200 === user.code && AuthService.loginUser(user), EdClusterService.profileConnect(), void defer.resolve(user))
        }).error(function (response) {
            defer.reject(response)
        }), defer.promise
    }, AuthService.loginUser = function (user) {
        $sessionStorage.token = user.token, $sessionStorage.user = user.data, currentUser = $sessionStorage.user
    }, AuthService.challengeBySessionStorage = function () {
        if ($sessionStorage.user && $sessionStorage.token) {
            var newUser = {token: $sessionStorage.token, data: $sessionStorage.user};
            AuthService.loginUser(newUser)
        }
    }, AuthService.isModeEte = function () {
        var dateServeurAujourdhui = AuthService.parametragesRNE("dateServeurAujourdhui");
        dateServeurAujourdhui = Utils.formatDateFromBDD(dateServeurAujourdhui);
        var anneeScolaireFin = AuthService.parametragesRNE("anneeScolaireFin"),
            anneeScolaireDebut = AuthService.parametragesRNE("anneeScolaireDebut"),
            dateDebutModeEte = AuthService.parametragesRNE("dateDebutModeEte"),
            dateFinModeEte = AuthService.dateFinModeEte();
        return angular.isDefined(anneeScolaireFin) && angular.isDefined(anneeScolaireDebut) && angular.isDefined(dateDebutModeEte) && angular.isDefined(dateFinModeEte) && dateServeurAujourdhui >= Utils.formatDateFromBDD("" + anneeScolaireDebut + dateDebutModeEte) && (angular.isDefined(dateFinModeEte.fe) && dateServeurAujourdhui <= Utils.formatDateFromBDD("" + anneeScolaireDebut + dateFinModeEte.fe) || angular.isDefined(dateFinModeEte.p) && dateServeurAujourdhui <= Utils.formatDateFromBDD("" + anneeScolaireDebut + dateFinModeEte.p)) ? !0 : !1
    }, AuthService
}]), angular.module("edadminApp.Commun").factory("Settings", ["CONFIG", "$rootScope", "EdCluster", function (CONFIG, $rootScope, EdCluster) {
    var settingsService = {}, currentModeAPI = CONFIG.name, settingsData = {};
    return settingsService.touch = function () {
        $rootScope.$emit("update-settings")
    }, settingsService.displayNoMoreServerMessage = function () {
        $rootScope.$emit("nomore-server")
    }, settingsService.apiUri = "", settingsService.allSettings = function () {
        var version = "3.1.0";
        settingsService.apiUri = "";
        var notVersionningApiUri = "/", apiExtension = "", server = EdCluster.getServer();
        return server = "development" === currentModeAPI ? "api13.ecoledirecte.com" : "staging" === currentModeAPI ? "api13.ecoledirecte.com" : "futur" === currentModeAPI ? "wstest.ecoledirecte.com" : "local" === currentModeAPI ? CONFIG.ipIIS : "api.ecoledirecte.com", "" !== server && ("local" === currentModeAPI && (apiExtension = ".awp", notVersionningApiUri = "http://" + CONFIG.ipIIS + "/EDV3WEBSERVICES_WEB/FR/", settingsService.apiUri = notVersionningApiUri + "v3/admin/"), ("production" === currentModeAPI || "development" === currentModeAPI || "staging" === currentModeAPI || "futur" === currentModeAPI) && (apiExtension = ".awp", notVersionningApiUri = "https://" + server + "/", settingsService.apiUri = notVersionningApiUri + "v3/admin/")), settingsData = {
            version: version,
            apiUri: settingsService.apiUri,
            notVersionningApiUri: notVersionningApiUri,
            apiExtension: apiExtension,
            mode: currentModeAPI,
            contactMail: "contact@aplim.fr"
        }
    }, settingsService
}]), angular.module("edadminApp.httpAuthInterceptor", ["edadminApp.httpAuthInterceptorBuffer"]).factory("httpAuthService", ["$rootScope", "httpBuffer", function ($rootScope, httpBuffer) {
    return {
        loginConfirmed: function (data, configUpdater) {
            var updater = configUpdater || function (config) {
                return config
            };
            $rootScope.$broadcast("auth-loginConfirmed", data), httpBuffer.retryAll(updater, data)
        }, loginCancelled: function (reason) {
            httpBuffer.rejectAll(reason), $rootScope.$broadcast("auth-loginCancelled")
        }
    }
}]), angular.module("edadminApp.httpAuthInterceptorBuffer", []).factory("httpBuffer", ["$injector", function ($injector) {
    function retryHttpRequest(config, deferred) {
        function successCallback(response) {
            deferred.resolve(response)
        }

        function errorCallback(response) {
            deferred.reject(response)
        }

        $http = $http || $injector.get("$http"), $http(config).then(successCallback, errorCallback)
    }

    var $http, buffer = [];
    return {
        append: function (config, deferred) {
            return buffer.push({config: config, deferred: deferred}), buffer.length
        }, rejectAll: function (reason) {
            if (reason) for (var i = 0; i < buffer.length; ++i) buffer[i].deferred.reject(reason);
            buffer = []
        }, retryAll: function (updater, newToken) {
            for (var i = 0; i < buffer.length; ++i) {
                var config = buffer[i].config, data = config.data.replace(/^data=/, ""), jdata = JSON.parse(data);
                jdata.token = newToken, config.data = "data=" + JSON.stringify(jdata, null, 4), retryHttpRequest(updater(config), buffer[i].deferred)
            }
            buffer = []
        }
    }
}]), angular.module("edadminApp.Commun").factory("ProcessResponseInterceptor", ["$sessionStorage", "$location", "$q", "$rootScope", "httpBuffer", function ($sessionStorage, $location, $q, $rootScope, httpBuffer) {
    function handleSessionExpired(response) {
        return $location.path("/logout").search("code", "525"), $q.reject(response)
    }

    function handleForbidden(response) {
        return $location.path("/403"), $q.reject(response)
    }

    function isHttpAuthCodeError(code) {
        return !(525 !== code && 520 !== code)
    }

    function isHttpCodeError(code) {
        return code >= 400
    }

    function isTokenResponseEmpty(response) {
        return angular.isUndefined(response.data.token) || "" === response.data.token
    }

    function updateToken(response) {
        isTokenResponseEmpty(response) || ($sessionStorage.token = response.data.token)
    }

    function processResponse(response) {
        var excluded = /.*wsregie.*/;
        if (response.data) if (response.data.token && angular.isUndefined(response.data.code)) ; else {
            if (isHttpAuthCodeError(response.data.code)) return handleSessionExpired(response);
            if (403 === response.data.code) return handleForbidden(response);
            if (521 === response.data.code) return $q.reject(response);
            if (isHttpCodeError(response.data.code)) return $q.reject(response)
        }
        return response.config.url && !response.config.url.match(excluded) && updateToken(response), response
    }

    return {response: processResponse}
}]).factory("ProcessRequestInterceptor", ["$sessionStorage", "Settings", "CONFIG", function ($sessionStorage, Settings, CONFIG) {
    function processRequest(config) {
        for (var excluded = /.*(\.html|.*(\.json)|.*wsregie.*|.*espacestravail.*|http(s)?:\/\/).*/g, specificExclude = ["uib/template"], i = 0; i < specificExclude.length; i++) if (config.url.startsWith(specificExclude[i])) return config;
        if (config.intercepted) return config;
        if (config.url.indexOf(".htm") > -1 && 0 !== config.url.indexOf("template/") && -1 === config.url.indexOf("ui-listView") && -1 === config.url.indexOf("ng-mfb") && -1 === config.url.indexOf("angular-busy")) {
            var separator = -1 === config.url.indexOf("?") ? "?" : "&";
            config.url = config.url + separator + "v=" + CONFIG.version
        }
        if (config.url && !config.url.match(excluded)) {
            var regexParamGet = /(.*)\?(.*)/, resultRegex = regexParamGet.exec(config.url), target = config.url,
                apiUri = Settings.allSettings().apiUri;
            "" === apiUri && Settings.displayNoMoreServerMessage();
            var params = "";
            resultRegex && resultRegex.length >= 2 && (target = resultRegex[1], params = resultRegex[2]), config.url = target, config.url = apiUri + config.url + Settings.allSettings().apiExtension, config.url.replace(regexParamGet, ""), config.url += "?verbe=" + config.method.toLowerCase(), config.url += "&" + params, config.method = "POST", config.headers["Content-Type"] = "application/x-www-form-urlencoded", config.intercepted = !0
        }
        if (config.data && "object" == typeof config.data) {
            config.data.token = $sessionStorage.token;
            var replacer = function (key, value) {
                return "string" == typeof value ? (value = value.replace(/%/g, "%25"), value = value.replace(/&/g, "%26"), value = value.replace(/\+/g, "%2B")) : value
            }, strVal = JSON.stringify(config.data, replacer, 4);
            config.data = "data=" + strVal
        }
        return config
    }

    return {request: processRequest}
}]), angular.module("edadminApp.EdCluster", ["edadminApp.Commun", "btford.socket-io", "edadminApp.config"]).service("EdCluster", ["$rootScope", function ($rootScope) {
    var mEdCluster = {}, servers = [];
    return mEdCluster.setServers = function (staticservers) {
        servers = staticservers
    }, mEdCluster.servers = function () {
        return servers
    }, mEdCluster.getServer = function () {
        var allServers = [], isAnonymous = !$rootScope.Auth.isAuthenticated();
        if (angular.forEach(servers, function (serv) {
            var goodServer = !1;
            if (1 === serv.status && (isAnonymous && (goodServer = !0), ("P" === serv.profile || "ALL" === serv.profile) && (goodServer = !0), goodServer)) for (var i = 0; i < serv.weigth; i++) allServers.push(serv)
        }), 0 === allServers.length) return "";
        var newServer = allServers[Math.floor(Math.random() * allServers.length)];
        return newServer.name
    }, mEdCluster
}]).factory("EdClusterService", ["$rootScope", "$q", "$http", "EdCluster", "Settings", "edAdminSocket", "CONFIG", function ($rootScope, $q, $http, EdCluster, Settings, edAdminSocket, CONFIG) {
    var mEdClusterService = {};
    return mEdClusterService.socketConnect = function () {
        angular.isDefined(edAdminSocket.socket) && edAdminSocket.socket.on("server-update", function (message) {
            try {
                var lesServers = JSON.parse(message);
                EdCluster.setServers(lesServers), Settings.touch()
            } catch (err) {
            }
        })
    }, mEdClusterService.profileConnect = function () {
        var profile = "A";
        if (angular.isDefined(edAdminSocket.socket)) {
            var profileMessage = "join-" + profile;
            edAdminSocket.socket.emit(profileMessage, {token: $rootScope.Auth.socketToken()})
        }
    }, mEdClusterService.profileDisconnect = function () {
        var profile = "A";
        if (angular.isDefined(edAdminSocket.socket)) {
            var profileMessage = "leave-" + profile;
            edAdminSocket.socket.emit(profileMessage)
        }
    }, mEdClusterService.updateServers = function () {
        var defer = $q.defer(), baseUrl = "";
        return baseUrl = "development" === CONFIG.name || "local" === CONFIG.name ? "/EDCluster/servers-test.json?c=" + Date.now() : "/EDCluster/servers.json?c=" + Date.now(), $http({
            method: "GET",
            url: baseUrl
        }).then(function (response) {
            angular.isDefined(response.data.servers) && response.data.servers.length > 0 && (edAdminSocket.setClusterController(response.data.controller), mEdClusterService.socketConnect(), EdCluster.setServers(response.data.servers), Settings.touch(), mEdClusterService.profileConnect(), defer.resolve(Settings.allSettings()))
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, mEdClusterService
}]).factory("edAdminSocket", ["socketFactory", function (socketFactory) {
    var CONTROLLER_SERVER = "", mEdAdminSocket = {};
    return mEdAdminSocket.setClusterController = function (add) {
        CONTROLLER_SERVER = add, mEdAdminSocket.connect()
    }, mEdAdminSocket.connect = function () {
    }, mEdAdminSocket
}]), angular.module("edadminApp.Login").controller("LogoutCtrl", ["Auth", "$location", function (Auth, $location) {
    var vm = this;
    vm.code = $location.search().code, Auth.logout()
}]), angular.module("edadminApp.Login").controller("CreationcompteCtrl", ["LoginService", "$location", "$uibModalInstance", "user", "Notification", "httpAuthService", function (LoginService, $location, $uibModalInstance, user, Notification, httpAuthService) {
    function creationCompte() {
        vm.promiseContents = LoginService.creerCompte(vm.nouveauCompte).then(function (nouveauCompte) {
            200 === nouveauCompte.code ? (LoginService.showAuthentificationEtape2 = !0, vm.promiseContents = LoginService.login3DSecure({
                identifiant: vm.nouveauCompte.login,
                motdepasse: vm.nouveauCompte.nouveauMotDePasse
            }).then(function () {
                LoginService.username = vm.nouveauCompte.login, LoginService.pwd = vm.nouveauCompte.nouveauMotDePasse, $location.path("/"), $uibModalInstance.close(1)
            })) : 204 !== nouveauCompte.code ? Notification.notify("Echec lors de l'enregistrement", nouveauCompte.message, "error", !0) : (vm.promiseContents = LoginService.login(vm.nouveauCompte.login, vm.nouveauCompte.nouveauMotDePasse).then(function () {
                httpAuthService.loginConfirmed(user.token), $location.path("/")
            }), $uibModalInstance.close(1))
        }, function (error) {
            Notification.notify("Echec lors de l'enregistrement", error.message, "error", !0)
        })
    }

    var vm = this;
    vm.creationCompte = creationCompte, vm.nouveauCompte = {}, vm.forceMdp = user.niveauMdp, vm.nouveauCompte.login = user.login
}]), angular.module("edadminApp.Login").service("LoginService", ["$q", "$http", "Auth", "Settings", function ($q, $http, Auth, Settings) {
    var mLoginService = {};
    return mLoginService.showAuthentificationEtape2 = !1, mLoginService.username = "", mLoginService.pwd = "", mLoginService.login3DSecure = function (user) {
        var defer = $q.defer();
        return $http({
            method: "POST",
            url: Settings.allSettings().apiUri + "login/3DSecure" + Settings.allSettings().apiExtension,
            data: user,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).success(function (user) {
            defer.resolve(user)
        }).error(function (response) {
            505 === response.code && (mLoginService.errorMessage = "<b>Identifiant ou Mot de passe invalide</b><br/>L'identifiant et le mot de passe que vous avez entrÃ©s ne correspondent pas Ã  ceux prÃ©sents dans nos fichiers. Veuillez vÃ©rifier et rÃ©essayer <br/> Si le problÃ¨me persiste, veuillez cliquer sur le lien 'Mot de passe oubliÃ© ?'"), defer.reject(mLoginService.errorMessage)
        }), defer.promise
    }, mLoginService.login = function (username, password, codeSecure) {
        var defer = $q.defer();
        return mLoginService.errorMessage = "", mLoginService.promiseContents = Auth.login({
            identifiant: username,
            motdepasse: password,
            codeSecure: codeSecure
        }).then(function (user) {
            defer.resolve(user)
        }, function (errorResponse) {
            506 === errorResponse.code ? mLoginService.errorMessage = "<h4>Code SMS invalide</h4>" : 0 === errorResponse.etablissementsDisponible ? mLoginService.errorMessage = "<h2>Aucun Ã©tablissement disponible sur EcoleDirecte pour votre compte.</h2><br/> <h3>Veuillez vÃ©rifier vos transferts depuis <b>Charlemagne Outils</b> puis rÃ©essayer. </h3>" : mLoginService.errorMessage = "<b>Identifiant ou Mot de passe invalide</b><br/>L'identifiant et le mot de passe que vous avez entrÃ©s ne correspondent pas Ã  ceux prÃ©sents dans nos fichiers. Veuillez vÃ©rifier et rÃ©essayer <br/> Si le problÃ¨me persiste, veuillez cliquer sur le lien 'Mot de passe oubliÃ© ?'", defer.reject(mLoginService.errorMessage)
        }), defer.promise
    }, mLoginService.creerCompte = function (newCompte) {
        var defer = $q.defer(), data = newCompte;
        data.token = Auth.token();
        var baseUrl = "loginCreation";
        return $http({method: "POST", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, mLoginService.updateCompteAdmin = function (infosCompte) {
        var defer = $q.defer(), data = {
            email: infosCompte.adresseMail,
            portable: infosCompte.tel,
            nouveauMotDePasse: infosCompte.nouveauMdp,
            confirmationMotDePasse: infosCompte.mdpConfirm
        }, baseUrl = "logins/" + Auth.codeOgec();
        return $http({method: "PUT", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, mLoginService.reinitLogin = function (compte) {
        var defer = $q.defer(), data = compte, baseUrl = "reinitLogin";
        return $http({method: "PUT", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, mLoginService
}]), angular.module("edadminApp.Parametres", ["ngLodash"]).service("ParametresService", ["$http", "$q", "lodash", "Notification", "Utils", function ($http, $q, lodash, Notification, Utils) {
    var ParametresService = {};
    return ParametresService.CONSTANTES = {SEPARATEUR: "Â¤"}, ParametresService.getValueParam = function (tabParametres) {
        var defer = $q.defer(), data = {parametres: tabParametres}, baseUrl = "parametres";
        return $http({method: "GET", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, ParametresService.saveParams = function (tabParametres) {
        var defer = $q.defer(), data = {parametres: tabParametres}, baseUrl = "parametres";
        return $http({method: "POST", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, ParametresService.enregistrerParametres = function (tabParametresForWebDev, tabParametres) {
        var defer = $q.defer();
        return lodash.forEach(tabParametres, function (paramValue, paramKey) {
            angular.forEach(tabParametresForWebDev, function (targetElement) {
                targetElement.libelle === paramKey && (typeof paramValue == typeof !0 ? targetElement.valeur = paramValue ? "1" : "0" : targetElement.valeur = paramValue)
            })
        }), ParametresService.saveParams(tabParametresForWebDev).then(function (data) {
            200 === data.code ? (Notification.notify("Enregistrement du paramÃ©trage", "Vos paramÃ¨tres ont bien Ã©tÃ© enregistrÃ©s !", "success", !0), defer.resolve("true")) : (Notification.notify("Enregistrement du paramÃ©trage", "Une erreur est survenue lors de l'enregistrement de vos paramÃ¨tres !", "error", !0), defer.reject("erreur"))
        }, function (error) {
            !angular.isDefined(error.data.code) || 525 !== error.data.code && 520 !== error.data.code ? Notification.notify("Echec lors de l'enregistrement", error.message, "error", !0) : Notification.notify("Echec de l'opÃ©ration", "Votre session a expirÃ©", "error", !0), defer.reject(error)
        }), defer.promise
    }, ParametresService.listeParametres = function (tabParametresForWebDev) {
        var defer = $q.defer(), tabParametres = {},
            paramsToExclude = ["Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Banque", "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/Environnement", "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/MontantMinimum", "Sites/Familles/ComptabilitÃ©/RÃ¨glementsEnLigne/NoTPE", "Notes/NbreJoursDÃ©calage", "Moyennes/NbreJoursAprÃ¨sDateConseil", "ApprÃ©ciations/NbreJoursAprÃ¨sDateConseil", "Sites/Inscriptions/NbVoeux", "LSUN/NbreJoursDÃ©calage", "Sites/Familles/ConnecteurCATER/Etablissement_0/IdDossierAcia", "Sites/Familles/ConnecteurEsidoc/Etablissement_0/NombrePortailsSupplementaires", "Sites/Professeurs/ConnecteurPearlTrees/Etablissement_0/RNE", "Sites/Eleves/ConnecteurEduMalin/Etablissement_0/URL", "Sites/ParamÃ©trage/NombrePostit", "Sites/ParamÃ©trage/NombreAgenda", "Messagerie/ApiVersion", "ENT/EspacesClasses/DroitsMembres", "Sites/Connecteurs/TABULEO/APIKey", "Sites/ValiditeMDP/NbJours"];
        return ParametresService.getValueParam(tabParametresForWebDev).then(function (listeParametres) {
            lodash.forEach(listeParametres.data.parametres, function (param) {
                var isExcluded = lodash.findIndex(paramsToExclude, function (paramExclude) {
                    return -1 !== param.libelle.indexOf(paramExclude)
                });
                isExcluded = -1 !== isExcluded, "1" !== param.valeur && "0" !== param.valeur || isExcluded ? tabParametres[param.libelle] = param.valeur : tabParametres[param.libelle] = "1" === param.valeur
            }), 200 !== listeParametres.code ? (Notification.notify("Echec", "Une erreur est survenue lors de la rÃ©cupÃ©ration des paramÃ¨tres", "error", !0), defer.reject("erreur")) : defer.resolve(tabParametres)
        }, function (error) {
            !angular.isDefined(error.data.code) || 525 !== error.data.code && 520 !== error.data.code ? Notification.notify("Echec", "Une erreur est survenue lors de la rÃ©cupÃ©ration des paramÃ¨tres", "error", !0) : Notification.notify("Echec de l'opÃ©ration", "Votre session a expirÃ©", "error", !0), defer.reject(error)
        }), defer.promise
    }, ParametresService
}]), angular.module("edadminApp.Commun").service("CarnetCorrespondanceService", ["$q", "$http", "EDHttp", "Settings", function ($q, $http, EDHttp, Settings) {
    var CarnetCorrespondanceService = {};
    return CarnetCorrespondanceService.getTypesSanction = function () {
        var defer = $q.defer(), data = {}, baseUrl = "carnetCorrespondance/typesSanction";
        return new EDHttp({cache: !1, method: "GET", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, CarnetCorrespondanceService.getCategoriesSuivi = function () {
        var defer = $q.defer(), data = {}, baseUrl = "carnetCorrespondance/categoriesSuivi";
        return new EDHttp({cache: !1, method: "GET", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, CarnetCorrespondanceService.addCategorieSuivi = function (categorie) {
        var defer = $q.defer(), data = {categorie: categorie}, baseUrl = "carnetCorrespondance/categoriesSuivi";
        return new EDHttp({method: "POST", url: baseUrl, data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, CarnetCorrespondanceService.updateCategorieSuivi = function (categorie) {
        var defer = $q.defer(), data = {categorie: categorie},
            baseUrl = "carnetCorrespondance/categorieSuivi/" + categorie.id;
        return new EDHttp({method: "PUT", url: baseUrl, data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, CarnetCorrespondanceService.deleteCategorieSuivi = function (idCategorie) {
        var defer = $q.defer(), data = {}, baseUrl = "carnetCorrespondance/categorieSuivi/" + idCategorie;
        return new EDHttp({method: "DELETE", url: baseUrl, data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, CarnetCorrespondanceService
}]), angular.module("edadminApp.modals", ["ui.bootstrap"]).controller("ConfirmModalCtrl", ["$scope", "$uibModalInstance", "config", function ($scope, $uibModalInstance, config) {
    function okFn() {
        $uibModalInstance.close()
    }

    function cancelFn() {
        $uibModalInstance.dismiss()
    }

    $scope.cancel = config.cancel, $scope.title = config.title, $scope.message = config.message, $scope.confirm = config.confirm, $scope.cancelFn = cancelFn, $scope.okFn = okFn
}]), angular.module("edadminApp.modals").controller("PromptModalCtrl", ["$scope", "$uibModalInstance", "config", function ($scope, $uibModalInstance, config) {
    function okFn(input) {
        $uibModalInstance.close(input)
    }

    function cancelFn() {
        $uibModalInstance.dismiss()
    }

    $scope.cancel = config.cancel, $scope.title = config.title, $scope.message = config.message, $scope.confirm = config.confirm, $scope.input = config.value, $scope.cancelFn = cancelFn, $scope.okFn = okFn
}]), angular.module("edadminApp.modals").controller("PromptValidateModalCtrl", ["$uibModalInstance", "config", function ($uibModalInstance, config) {
    function checkAddition(input) {
        additionvalue == vm.additionresultat ? vm.isGoodAddition = !0 : vm.isGoodAddition = !1
    }

    function okFn1() {
        vm.showConfirm = !0
    }

    function okFn2() {
        $uibModalInstance.close()
    }

    function cancelFn() {
        $uibModalInstance.dismiss()
    }

    var vm = this;
    vm.cancel1 = config.cancel1, vm.cancel2 = config.cancel2, vm.title = config.title, vm.message = config.message, vm.messageconfirmation = config.messageconfirmation, vm.confirm1 = config.confirm1, vm.confirm2 = config.confirm2, vm.showConfirm = !1, vm.isGoodAddition = !1;
    var n1 = Math.round(10 * Math.random() + 1), n2 = Math.round(10 * Math.random() + 1), additionvalue = n1 + n2 + "";
    vm.additiontext = n1 + " + " + n2, vm.cancelFn = cancelFn, vm.okFn1 = okFn1, vm.okFn2 = okFn2, vm.checkAddition = checkAddition
}]), angular.module("edadminApp.base64filter", []).filter("base64decode", ["$log", function ($log) {
    return function (input) {
        var decoded;
        if ("undefined" == typeof input || "" === input) return input;
        try {
            decoded = Base64.decode(input)
        } catch (e) {
            try {
                decoded = window.atob(input)
            } catch (err) {
                decoded = input
            }
        }
        return decoded
    }
}]).filter("base64encode", ["$log", function ($log) {
    return function (input) {
        var encoded;
        if ("undefined" == typeof input || "" === input) return input;
        try {
            encoded = Base64.encode(input)
        } catch (e) {
            try {
                encoded = window.btoa(input)
            } catch (err) {
                encoded = input
            }
        }
        return encoded
    }
}]), angular.module("edadminApp.rangeDatesFilter", []).filter("rangeDatesJJ", function () {
    return function (input, min, max) {
        min = parseInt(min), max = parseInt(max);
        for (var i = min; max >= i; i++) {
            var cara = (10 > i ? "0" : "") + i;
            input.push(cara)
        }
        return input
    }
}).filter("rangeDatesMM", function () {
    var monthNames = ["Janvier", "FÃ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃ»t", "Septembre", "Octobre", "Novembre", "DÃ©cembre"];
    return function (input, min, max) {
        min = parseInt(min), max = parseInt(max);
        for (var i = min; max >= i; i++) {
            var cara = (10 > i ? "0" : "") + i;
            input.push({value: cara, label: monthNames[i - 1]})
        }
        return input
    }
}), angular.module("edadminApp.nl2brFilter", []).filter("nl2br", ["$sce", function ($sce) {
    function escapeHTML(html) {
        var div = document.createElement("div");
        return div.innerText = html, div.innerHTML
    }

    return function (input) {
        if ("undefined" == typeof input) return input;
        var sanitizedInput = escapeHTML(input), html = sanitizedInput.replace(/\n/g, "<br>");
        return $sce.trustAsHtml(html)
    }
}]), angular.module("edadminApp.Utils", []).service("Utils", ["$filter", "$uibModal", "$q", function ($filter, $uibModal, $q) {
    var Utils = {};
    return Utils.translateType = function (typeUser) {
        var type = {
            eleves: function () {
                return "E"
            }, ELEVE: function () {
                return "E"
            }, responsable: function () {
                return "1"
            }, conjoint: function () {
                return "2"
            }, personnels: function () {
                return "A"
            }, personnel: function () {
                return "A"
            }, exterieur: function () {
                return "A"
            }, professeurs: function () {
                return "P"
            }, prof: function () {
                return "P"
            }, prof_personnel: function () {
                return "P"
            }, familles: function () {
                return "F"
            }, entreprises: function () {
                return "T"
            }
        };
        return type[typeUser]()
    }, Utils.translateLongType = function (typeUser) {
        var type = {
            E: function () {
                return "Ã‰lÃ¨ve"
            }, T: function () {
                return "Entreprise"
            }, 1: function () {
                return "Responsable"
            }, 2: function () {
                return "Conjoint"
            }, A: function () {
                return "Personnel"
            }, P: function () {
                return "Professeur"
            }, F: function () {
                return "Famille"
            }, PA: function () {
                return "Professeurs / Personnels"
            }
        };
        return type[typeUser]()
    }, Utils.formatDateFromBDD = function (dateBDD) {
        if (angular.isUndefined(dateBDD) || null === dateBDD || 8 !== dateBDD.length) return null;
        var dateTemp = dateBDD.slice(0, 4) + "-" + dateBDD.slice(4, 6) + "-" + dateBDD.slice(6, 8);
        return new Date(dateTemp)
    }, Utils.formatDateToBDD = function (dateView, pFilter) {
        return pFilter = pFilter || "yyyyMMdd", !angular.isUndefined(dateView) && angular.isDate(dateView) ? $filter("date")(new Date(dateView), pFilter) : ""
    }, Utils.formatMMjjFromBDD = function (dateBDD) {
        return angular.isUndefined(dateBDD) || null === dateBDD || 4 !== dateBDD.length ? {
            jour: "",
            mois: ""
        } : {jour: dateBDD.slice(2, 4), mois: dateBDD.slice(0, 2)}
    }, Utils.formatMMjjToBDD = function (dd, mm) {
        return "" + mm + dd
    }, Utils.displayModalConfirmRGPD = function (libelleConnecteur, libelleParametrage, tabParametres) {
        var defer = $q.defer();
        if (angular.isDefined(libelleParametrage)) {
            if ("boolean" != typeof tabParametres[libelleParametrage]) return defer.resolve({etat: "erreur"}), defer.promise;
            if (tabParametres[libelleParametrage] === !1) return defer.resolve({etat: "desactivation"}), defer.promise
        }
        var modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/confirm-modal.template.html",
            controller: "ConfirmModalCtrl",
            size: "md",
            resolve: {
                config: function () {
                    var config = {}, tabInfosRGPD = ["Noms", "PrÃ©noms", "Classes", "Formations"],
                        messageGenerique = '<p>En activant ce connecteur les informations suivantes seront transmises Ã  la plateforme tierce : </p><ul class="list-circle">';
                    switch (libelleConnecteur) {
                        case"Alise":
                            tabInfosRGPD = ["Noms", "PrÃ©noms"];
                            break;
                        case"Portail numÃ©rique OK Savoie":
                            tabInfosRGPD = tabInfosRGPD.concat(["Adresse postal", "Email", "TÃ©lÃ©phone", "Date de naissance"])
                    }
                    return angular.forEach(tabInfosRGPD, function (infoRGPD) {
                        messageGenerique += "<li>" + infoRGPD + "</li>"
                    }), messageGenerique += "</ul>", config.message = messageGenerique, config.title = "Activation du connecteur <strong>" + libelleConnecteur + "</strong>", config.confirm = "Valider", config.cancel = "Non", config
                }
            }
        });
        return modalInstance.result.then(function () {
            return {etat: "accepte"}
        }, function () {
            return angular.isDefined(libelleParametrage) && (tabParametres[libelleParametrage] = !1), {etat: "annulation"}
        })
    }, Utils
}]), angular.module("edadminApp.Commun").service("BanquesService", ["$q", "$http", "EDHttp", function ($q, $http, EDHttp) {
    var BanquesService = {};
    return BanquesService.getBanques = function () {
        var defer = $q.defer(), data = {}, baseUrl = "banques";
        return new EDHttp({method: "GET", url: baseUrl, data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, BanquesService.enregistreInfosBanque = function (infosBanque) {
        var defer = $q.defer(), data = {
            idBanque: infosBanque.id,
            certificatProduction: infosBanque.certifProd,
            certificatTest: infosBanque.certifTest,
            codeSociete: infosBanque.codeSociete,
            numeroTPE: infosBanque.numeroTPE,
            environnement: infosBanque.environnement,
            cryptage: infosBanque.cryptage
        }, baseUrl = "banques";
        return $http({method: "POST", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, BanquesService.migrationPaiementsToV2 = function () {
        var defer = $q.defer(), baseUrl = "migrationPaiementv2";
        return $http({method: "migrateversion", url: baseUrl, data: {}}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, BanquesService.migrationPaiementsDataToBddV2 = function () {
        var defer = $q.defer(), baseUrl = "migrationPaiementv2";
        return $http({method: "migratedatas", url: baseUrl, data: {}}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, BanquesService
}]), angular.module("edadminApp.Commun").service("ActivitesService", ["$q", "$http", "EDHttp", function ($q, $http, EDHttp) {
    var ActivitesService = {};
    return ActivitesService.getActivites = function (typeUser) {
        var defer = $q.defer(), data = {}, baseUrl = "activites/" + typeUser;
        return new EDHttp({method: "GET", url: baseUrl, data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, ActivitesService
}]), angular.module("customColorPicker", []).directive("colorPicker", function () {
    return {
        restrict: "E",
        templateUrl: "/scripts/directives/colorPicker/color-picker.html",
        scope: {color: "=", options: "=", onColorChanged: "&"},
        controller: "colorPickerDirectiveController"
    }
}).controller("colorPickerDirectiveController", ["$scope", function ($scope) {
    $scope.changeColor = function (option) {
        if ($scope.color != option) {
            $scope.color;
            $scope.color = option, $scope.onColorChanged({newColor: option})
        }
    }
}]), angular.module("edadminApp.Commun").service("PorteMonnaieService", ["$q", "$http", "EDHttp", function ($q, $http, EDHttp) {
    var PorteMonnaieService = {};
    return PorteMonnaieService.getPorteMonnaie = function (typeUser) {
        var defer = $q.defer(), data = {}, baseUrl = "portesMonnaie/" + typeUser;
        return angular.isUndefined(typeUser) ? void 0 : (new EDHttp({
            method: "GET",
            url: baseUrl,
            data: data,
            cache: !0
        }).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise)
    }, PorteMonnaieService
}]), angular.module("edadminApp.Commun").service("EntService", ["$q", "$http", "Settings", "EDHttp", function ($q, $http, Settings, EDHttp) {
    var EntService = {};
    return EntService.CONSTANTES = {
        PROFIL_ELEVE: "E",
        PROFIL_PROF: "P",
        PROFIL_RESPONSABLE: "1",
        PROFIL_CONJOINT: "2",
        PROFIL_PERSONNEL: "A",
        DROIT_LECTURE: 1,
        DROIT_MODIFICATION: 2,
        DROIT_SUPPRESSION: 3,
        DROIT_ADMIN: 4,
        ESPACES_CLASSES: "EspacesClasses",
        ESPACES_SALLE_DES_PROFS: "SalleDesProfs",
        ESPACES_EQUIPES_PEDAGOGIQUES: "equipesPedagogiques"
    }, EntService.createENT = function (typeEnt, cloudActif, discussionActive, agendaActif, droitsMembres) {
        var defer = $q.defer(), data = {
            type: typeEnt,
            cloud: cloudActif,
            discussion: discussionActive,
            agenda: agendaActif,
            droitsMembres: droitsMembres
        }, baseUrl = "ent";
        return $http({method: "POST", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, EntService.listENT = function () {
        var defer = $q.defer(), data = {}, typeUser = "Admin", idUser = 0,
            baseUrl = Settings.allSettings().notVersionningApiUri + "v3/" + typeUser + "/" + idUser + "/espacestravail.awp?verbe=get";
        return $http({
            method: "POST",
            url: baseUrl,
            data: data,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, EntService.deleteENT = function (idEspace) {
        var defer = $q.defer(), data = {}, typeUser = "Admin", idUser = 0,
            baseUrl = Settings.allSettings().notVersionningApiUri + "v3/" + typeUser + "/" + idUser + "/espacestravail/" + idEspace + ".awp?verbe=delete";
        return $http({
            method: "POST",
            url: baseUrl,
            data: data,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, EntService.listeMembres = function (idEspace) {
        var defer = $q.defer(), data = {}, typeUser = "Admin", idUser = 0,
            baseUrl = Settings.allSettings().notVersionningApiUri + "v3/" + typeUser + "/" + idUser + "/espacestravail/" + idEspace + "/membres.awp?verbe=get";
        return new EDHttp({
            method: "POST",
            url: baseUrl,
            data: data,
            cache: !0,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, EntService.modifierDroits = function (espaceTravail) {
        var defer = $q.defer(), typeUser = "Admin", idUser = 0, data = espaceTravail, idEspace = espaceTravail.id,
            baseUrl = Settings.allSettings().notVersionningApiUri + "v3/" + typeUser + "/" + idUser + "/espacestravail/" + idEspace + ".awp?verbe=put";
        return $http({
            method: "POST",
            url: baseUrl,
            data: data,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, EntService.supprimerMembre = function (membre, espaceTravail) {
        var defer = $q.defer(), typeUser = "Admin", idUser = 0, data = {},
            baseUrl = Settings.allSettings().notVersionningApiUri + "v3/" + typeUser + "/" + idUser + "/espacestravail/" + espaceTravail.id + "/membres/" + membre.profil + "/" + membre.idMembre + ".awp?verbe=delete";
        return $http({
            method: "POST",
            url: baseUrl,
            data: data,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, EntService.supprimerMultiplesMembres = function (tabMembres, espaceTravail) {
        var defer = $q.defer(), typeUser = "Admin", idUser = 0, data = {membres: tabMembres},
            baseUrl = Settings.allSettings().notVersionningApiUri + "v3/" + typeUser + "/" + idUser + "/espacestravail/" + espaceTravail.id + "/membres.awp?verbe=delete";
        return $http({
            method: "POST",
            url: baseUrl,
            data: data,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, EntService.ajouterMembre = function (membre, espaceTravail) {
        var defer = $q.defer(), typeUser = "Admin", idUser = 0,
            data = {membres: [{idMembre: membre.id, profil: membre.profil}]},
            baseUrl = Settings.allSettings().notVersionningApiUri + "v3/" + typeUser + "/" + idUser + "/espacestravail/" + espaceTravail.id + "/membres.awp?verbe=post";
        return $http({
            method: "POST",
            url: baseUrl,
            data: data,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, EntService.purgerEspaceTravail = function () {
        var defer = $q.defer(), data = {},
            baseUrl = Settings.allSettings().notVersionningApiUri + "v3/admin/purgerEnt.awp?verbe=delete";
        return $http({
            method: "POST",
            url: baseUrl,
            data: data,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, EntService.viderFilActivite = function (espaceTravail) {
        var defer = $q.defer(), typeUser = "Admin", idUser = 0, data = {all: 1},
            baseUrl = Settings.allSettings().notVersionningApiUri + "v3/" + typeUser + "/" + idUser + "/espacestravail/" + espaceTravail.id + "/activites.awp?verbe=delete";
        return $http({
            method: "POST",
            url: baseUrl,
            data: data,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, EntService
}]), angular.module("edadminApp.Commun").service("ConnecteursService", ["$q", "EDHttp", function ($q, EDHttp) {
    var ConnecteursService = {};
    return ConnecteursService.get = function (nomConnecteur, codeRNE) {
        var defer = $q.defer(), data = {}, baseUrl = "connecteurs/" + nomConnecteur + "/" + codeRNE;
        return new EDHttp({method: "GET", url: baseUrl, data: data, cache: !1}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, ConnecteursService.listConnecteurs = function () {
        var defer = $q.defer(), data = {}, baseUrl = "connecteurs";
        return new EDHttp({method: "GET", url: baseUrl, data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, ConnecteursService
}]), angular.module("edadminApp.ParametragesFamillesEleves").controller("NotesPeriodesFamillesElevesCtrl", ["ParametresService", "$routeParams", "Auth", function (ParametresService, $routeParams, Auth) {
    function initialize() {
        vm.dicoParams = [], Auth.parametrageParEtablissement() && (nbEtablissement = vm.tabEtablissements.length);
        for (var indiceEtab = 0, i = 0; nbEtablissement > i; i++) indiceEtab = Auth.parametrageParEtablissement() ? vm.tabEtablissements[i].id : 0, vm.dicoParams.push({libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/PÃ©riodesCloturÃ©es"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/PÃ©riodesRelevÃ©"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/PÃ©riodesAnnÃ©e"}, {libelle: "Sites/" + vm.realTypeUser + "/Notes/Etablissement_" + indiceEtab + "/Notes/HorsPÃ©riode"});
        ParametresService.listeParametres(vm.dicoParams).then(function (data) {
            vm.tabParametres = data
        })
    }

    function paramUpdated() {
        vm.disabledForm = !1
    }

    function saveParams() {
        ParametresService.enregistrerParametres(vm.dicoParams, vm.tabParametres).then(function () {
            vm.disabledForm = !0
        })
    }

    var vm = this;
    vm.initialize = initialize, vm.paramUpdated = paramUpdated, vm.saveParams = saveParams, vm.typeUser = $routeParams.typeEntity, "familles" === vm.typeUser ? vm.realTypeUser = "Familles" : "eleves" === vm.typeUser ? vm.realTypeUser = "Eleves" : vm.realTypeUser = "Entreprises";
    var nbEtablissement = 1;
    vm.tabEtablissements = Auth.etablissements(), vm.disabledForm = !0, vm.tabParametres = {}, initialize()
}]), angular.module("edadminApp.ParametragesGeneraux").directive("gestionEspacesTravail", function () {
    return {
        templateUrl: "scripts/directives/administration-espaces-travail/template-gestion-espaces-travail.html",
        restrict: "EA",
        scope: {tabEspacesTravail: "=", libelleEspaceTravail: "@", idEspaceTravail: "@"},
        controller: "DirectiveGestionEspacesTravailCtrl"
    }
}).controller("DirectiveGestionEspacesTravailCtrl", ["$scope", "EntService", "$uibModal", "Notification", "lodash", function ($scope, EntService, $uibModal, Notification, lodash) {
    function setCurrentPage(nbPage) {
        $scope.currentPage = nbPage
    }

    function setSelectedAll(isSelectAll) {
        $scope.selectedAll = isSelectAll
    }

    function selectAll() {
        lodash.forEach($scope.tabEspacesTravail, function (espace) {
            espace.isSelected = $scope.selectedAll
        }), $scope.selectedAll ? $scope.espacesTravailToDelete = $scope.tabEspacesTravail : $scope.espacesTravailToDelete = []
    }

    function addToEspacesToDelete() {
        $scope.selectedAll = !1, $scope.espacesTravailToDelete = lodash.filter($scope.tabEspacesTravail, {isSelected: !0})
    }

    function deleteEspace() {
        var messageConfirmation = "", title = "";
        1 === $scope.espacesTravailToDelete.length ? (title = "Suppression d'un espace de travail", messageConfirmation = "<p><strong>Attention</strong></p><p>Vous vous apprÃªtez Ã  <strong>supprimer</strong> cet espaces de travail.</p>") : (title = "Suppression de plusieurs espaces de travail", messageConfirmation = "<p><strong>Attention</strong></p><p>Vous vous apprÃªtez Ã  <strong>supprimer " + $scope.espacesTravailToDelete.length + "</strong> espaces de travail.</p>"), messageConfirmation += '<div class="alert alert-danger text-center">Tous les contenus seront <strong>DEFINITIVEMENT</strong> supprimÃ©s, et ne pourront plus Ãªtre rÃ©cupÃ©rÃ©s (documents du cloud, discussions, membres, Ã©vÃ¨nements de l\'agenda et les post-its) !</div>', 1 === $scope.espacesTravailToDelete.length ? messageConfirmation += "<p>Etes-vous sÃ»r de vouloir <strong>supprimer</strong> l'espace de travail et ses donnÃ©es ?</p>" : (title = "Suppression de plusieurs espaces de travail", messageConfirmation += "<p>Etes-vous sÃ»r de vouloir <strong>supprimer</strong> ces espaces de travail et leurs donnÃ©es ?</p>");
        var modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/prompt-validate-modal.template.html",
            controller: "PromptValidateModalCtrl",
            controllerAs: "CtrlPromptValidateModal",
            size: "md",
            resolve: {
                config: function () {
                    var config = {};
                    return config.title = title, config.message = messageConfirmation, config.messageconfirmation = "Pour confirmer votre choix", config.confirm1 = "Valider", config.cancel1 = "Non", config.confirm2 = "Supprimer", config.cancel2 = "Annuler", config
                }
            }
        });
        modalInstance.result.then(function () {
            deleteEspaceTravail()
        })
    }

    function deleteEspaceTravail() {
        var nombreElements = $scope.espacesTravailToDelete.length, nombreElementsTraites = 0;
        if (!(0 >= nombreElements)) {
            var hasError = !1;
            $scope.espacesTravailToDelete.forEach(function (item, index) {
                var espaceTravailActuel = item;
                $scope.deletePromise = EntService.deleteENT(espaceTravailActuel.id).then(function () {
                    lodash.remove($scope.espacesTravailToDelete, function (espaceTravailFound) {
                        return espaceTravailFound.id === espaceTravailActuel.id
                    }), lodash.remove($scope.tabEspacesTravail, function (espaceTravail) {
                        return espaceTravail.id === espaceTravailActuel.id
                    }), $scope.tabEspacesTravailForPagination = lodash.chain($scope.tabEspacesTravail).orderBy(["titre"], ["asc"]).chunk($scope.itemParPage).value(), nombreElementsTraites += 1, 0 !== $scope.espacesTravailToDelete.length || hasError || Notification.notify("Espace de travail", "La suppression de l'ensemble des Ã©lÃ©ments choisis a bien Ã©tÃ© effectuÃ©e ! ", "success", "fa ed-icon-workplace"), hasError && nombreElements === nombreElementsTraites && Notification.notify("Espace de travail", "La suppression de certains Ã©lÃ©ments choisis n'a pas pu Ãªtre effectuÃ©e.", "error", "fa ed-icon-workplace")
                }, function (error) {
                    hasError = !0, nombreElementsTraites += 1, 0 !== $scope.espacesTravailToDelete.length || hasError || Notification.notify("Espace de travail", "La suppression de l'ensemble des Ã©lÃ©ments choisis a bien Ã©tÃ© effectuÃ©e ! ", "success", "fa ed-icon-workplace"), hasError && nombreElements === nombreElementsTraites && Notification.notify("Espace de travail", "La suppression de certains Ã©lÃ©ments choisis n'a pas pu Ãªtre effectuÃ©e.", "error", "fa ed-icon-workplace")
                })
            })
        }
    }

    function visualiserMembres(espaceTravail) {
        var modalInstance = $uibModal.open({
            templateUrl: "modules/parametrages-generaux/ent-liste-membres.template.html",
            controller: "EspaceTravailListeMembresCtrl",
            controllerAs: "CtrlEspTravailListeMembres",
            size: "lg",
            resolve: {
                espaceT: function () {
                    return espaceTravail
                }
            }
        });
        modalInstance.result.then(function () {
        })
    }

    function viderFilActivite(espaceTravail) {
        var title = "Purge du fil d'activitÃ© d'un espace de travail",
            messageConfirmation = "<p>ÃŠtes-vous sÃ»r de vouloir <strong>supprimer </strong> la totalitÃ© du contenu fil d'activitÃ© de cet espace de travail ? </p>";
        messageConfirmation += '<div class="alert alert-danger text-center">Attention <strong>cette action est dÃ©finitive</strong> !</div>';
        var modalInstance = $uibModal.open({
            templateUrl: "../../scripts/modals/confirm-modal.template.html",
            controller: "ConfirmModalCtrl",
            size: "md",
            resolve: {
                config: function () {
                    var config = {};
                    return config.title = title, config.message = messageConfirmation, config.confirm = "Valider", config.cancel = "Non", config
                }
            }
        });
        modalInstance.result.then(function () {
            EntService.viderFilActivite(espaceTravail).then(function () {
                Notification.notify("Espace de travail", "La purge du fil d'activitÃ© a bien Ã©tÃ© effectuÃ©e ! ", "success", "fa ed-icon-workplace")
            }, function () {
                Notification.notify("Espace de travail", "La purge du fil d'activitÃ© n'a pas pu Ãªtre effectuÃ©e.", "error", "fa ed-icon-workplace")
            })
        })
    }

    $scope.deleteEspace = deleteEspace, $scope.visualiserMembres = visualiserMembres, $scope.viderFilActivite = viderFilActivite, $scope.selectAll = selectAll, $scope.addToEspacesToDelete = addToEspacesToDelete, $scope.setCurrentPage = setCurrentPage, $scope.setSelectedAll = setSelectedAll, $scope.espacesTravailToDelete = [], $scope.currentPage = 1, $scope.itemParPage = 50, $scope.tabEspacesTravailForPagination = lodash.chain($scope.tabEspacesTravail).orderBy(["titre"], ["asc"]).chunk($scope.itemParPage).value()
}]),angular.module("edadminApp.ParametragesGeneraux").directive("gestionPortailsEsidoc", function () {
    return {
        templateUrl: "scripts/directives/template-gestion-portails-esidoc.html",
        restrict: "A",
        scope: {},
        bindToController: {
            portail: "=",
            tabEsidocSuppsParametres: "=",
            portailsEsidocSupplementaires: "=",
            paramUpdated: "&",
            saveParams: "&"
        },
        controller: "DirectiveGestionPortailsEsidocCtrl",
        controllerAs: "CtrlDirectiveGestionPortailsEsidoc"
    }
}).controller("DirectiveGestionPortailsEsidocCtrl", ["lodash", function (lodash) {
    function deletePortail(id_portail) {
        for (var tabParamsEsidoc = Object.keys(vm.tabEsidocSuppsParametres), isPortailAlreadySave = !1, i = 0; i < tabParamsEsidoc.length; i++) {
            var partOne = tabParamsEsidoc[i].split("Sites/Familles/ConnecteursEsidoc_"),
                idPortail = partOne[1].split("/")[0];
            if (parseInt(idPortail) === id_portail) {
                isPortailAlreadySave = !0;
                break
            }
        }
        delete vm.tabEsidocSuppsParametres["Sites/Familles/ConnecteursEsidoc_" + id_portail + "/Etablissement_0/Libelle"], delete vm.tabEsidocSuppsParametres["Sites/Familles/ConnecteursEsidoc_" + id_portail + "/Etablissement_0/Actif"], delete vm.tabEsidocSuppsParametres["Sites/Familles/ConnecteursEsidoc_" + id_portail + "/Etablissement_0/Domaine"], lodash.remove(vm.portailsEsidocSupplementaires, {indice: id_portail}), isPortailAlreadySave && vm.saveParams()
    }

    var vm = this;
    vm.deletePortail = deletePortail
}]),angular.module("edadminApp.Commun").service("ArchivageCDTService", ["$q", "EDHttp", function ($q, EDHttp) {
    var ArchivageCDTService = {};
    return ArchivageCDTService.getAnneesArchivage = function () {
        var defer = $q.defer(), data = {}, baseUrl = "archivageCDT";
        return new EDHttp({method: "GET", url: baseUrl, data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, ArchivageCDTService
}]),angular.module("edadminApp.Commun").service("SynchrosEDService", ["$q", "EDHttp", function ($q, EDHttp) {
    var SynchrosEDService = {};
    return SynchrosEDService.getEtatsSynchros = function (codeOgec) {
        var defer = $q.defer(), data = {}, baseUrl = "synchrosED/" + codeOgec;
        return EDHttp({method: "GET", url: baseUrl, data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, SynchrosEDService
}]),angular.module("edadminApp").service("TeleversementsService", ["$q", "Settings", "$http", function ($q, Settings, $http) {
    var TeleversementsService = {};
    return TeleversementsService.deleteFile = function (fichierToDElete) {
        var defer = $q.defer(), data = {},
            baseUrl = Settings.allSettings().notVersionningApiUri + "v3/televersement.awp?verbe=post&mode=CONTACT_ETAB&action=suppression&file=" + fichierToDElete;
        return $http({
            method: "POST",
            url: baseUrl,
            data: data,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, TeleversementsService
}]),angular.module("edadminApp.Commun").service("LSUService", ["$q", "$http", "EDHttp", function ($q, $http, EDHttp) {
    var LSUService = {};
    return LSUService.listClassesProfsCompetencesNumeriques = function () {
        var defer = $q.defer(), data = {}, baseUrl = "LSU/CompNumeriques/classes";
        return new EDHttp({cache: !1, method: "GET", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, LSUService
}]),angular.module("edadminApp.Commun").service("SupervisionService", ["$q", "$http", "EDHttp", function ($q, $http, EDHttp) {
    var SupervisionService = {};
    return SupervisionService.getUtilisateurs = function (typeUtilisateurs, filter) {
        var defer = $q.defer(), data = {}, baseUrl = "utilisateurs/" + typeUtilisateurs + "?filterSearch=" + filter,
            cache = "professeurs" === typeUtilisateurs || "personnels" === typeUtilisateurs;
        return new EDHttp({method: "GET", url: baseUrl, data: data, cache: cache}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, SupervisionService.getIdentifiantsMobile = function (id, type) {
        var defer = $q.defer(), data = {}, baseUrl = "supervisionmobile?id=" + id + "&type=" + type;
        return $http({method: "POST", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, SupervisionService
}]),angular.module("edadminApp.Commun").directive("webDevAffichePage", ["Auth", "lodash", function (Auth, lodash) {
    return {
        restrict: "A", scope: {additionalData: "&", url: "@"}, link: function (scope, element) {
            element.on("click", function () {
                var action = scope.url, formElement = angular.element("<form/>");
                formElement.attr({method: "POST", target: "_blank", action: action});
                var tokenElement = angular.element("<input />");
                tokenElement.attr({
                    type: "hidden",
                    value: Auth.token(),
                    name: "token"
                }), formElement.append(tokenElement);
                var additionalData = scope.additionalData();
                lodash.forEach(additionalData, function (value, key) {
                    var newElement = angular.element("<input />");
                    newElement.attr({type: "hidden", value: value, name: key}), formElement.append(newElement)
                }), formElement.appendTo("body").submit(), formElement.remove()
            })
        }
    }
}]),angular.module("edadminApp.Commun").service("StatsService", ["EDHttp", "$q", function (EDHttp, $q) {
    var StatsService = {};
    return StatsService.getStats = function (site) {
        var defer = $q.defer(), data = {}, baseUrl = "stats/" + site;
        return new EDHttp({method: "GET", url: baseUrl, data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, StatsService
}]),angular.module("edadminApp.Login").controller("ReinitloginCtrl", ["LoginService", "Notification", "$uibModalInstance", function (LoginService, Notification, $uibModalInstance) {
    function sendMdpReinit() {
        LoginService.reinitLogin(vm.compte).then(function (reponse) {
            200 !== reponse.code ? Notification.notify("Echec lors de l'enregistrement", reponse.message, "error", !0) : $uibModalInstance.close(1)
        }, function (error) {
            Notification.notify("Echec lors de l'enregistrement", error.message, "error", !0)
        })
    }

    var vm = this;
    vm.sendMdpReinit = sendMdpReinit, vm.compte = {}
}]),angular.module("edadminApp.Commun").service("IdentifiantsUtilisateursService", ["$q", "$http", function ($q, $http) {
    var mIdentifiantsUtilisateursService = {};
    return mIdentifiantsUtilisateursService.getUserBlockingState = function (typeUser, idUser) {
        var defer = $q.defer(), data = {}, baseUrl = "blockingState/" + typeUser + "/" + idUser;
        return $http({method: "GET", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, mIdentifiantsUtilisateursService.unblockUser = function (typeUser, idUser) {
        var defer = $q.defer(), data = {}, baseUrl = "blockingState/" + typeUser + "/" + idUser;
        return $http({method: "DELETE", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, mIdentifiantsUtilisateursService.reinitLogins = function (typeUser) {
        var defer = $q.defer(), data = {}, baseUrl = "loginsED/" + typeUser;
        return $http({method: "DELETE", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, mIdentifiantsUtilisateursService.forceUpdateMdpForLogins = function (typeUser) {
        var defer = $q.defer(), data = {}, baseUrl = "loginsED/" + typeUser;
        return $http({method: "PUT", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error.data)
        }), defer.promise
    }, mIdentifiantsUtilisateursService.getCompteOrigineED = function (typeUser, idUser) {
        var defer = $q.defer(), data = {}, baseUrl = "compteOrigineED/" + typeUser + "/" + idUser;
        return $http({method: "GET", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, mIdentifiantsUtilisateursService.reaffecteCompteOrigineED = function (typeUser, idUser) {
        var defer = $q.defer(), data = {}, baseUrl = "compteOrigineED/" + typeUser + "/" + idUser;
        return $http({method: "DELETE", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, mIdentifiantsUtilisateursService.forceUpdateMdpLogin = function (typeUser, idUser) {
        var defer = $q.defer(), data = {}, baseUrl = "compteOrigineED/" + typeUser + "/" + idUser;
        return $http({method: "PUT", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, mIdentifiantsUtilisateursService
}]),angular.module("edadminApp.Commun").service("MessagerieService", ["$q", "$http", function ($q, $http) {
    var mMessagerieService = {};
    return mMessagerieService.supprimeMessagesED = function () {
        var defer = $q.defer(), data = {}, baseUrl = "messagerieED";
        return $http({method: "DELETE", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, mMessagerieService.migrationToV3MessagesED = function () {
        var defer = $q.defer(), data = {newVersion: "v3"}, baseUrl = "messagerieED";
        return $http({method: "MIGRATE", url: baseUrl, data: data}).then(function (response) {
            defer.resolve(response.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, mMessagerieService
}]),angular.module("edadminApp.Commun").service("EDTService", ["$q", "$http", "EDHttp", function ($q, $http, EDHttp) {
    var EDTService = {};
    return EDTService.getListeSalles = function () {
        var defer = $q.defer(), data = {}, baseUrl = "salles";
        return new EDHttp({method: "GET", url: baseUrl, data: data, cache: !0}).then(function (response) {
            defer.resolve(response.data.data)
        }, function (error) {
            defer.reject(error)
        }), defer.promise
    }, EDTService
}]),angular.module("edadminApp.Commun").directive("displayQrCode", ["Auth", "lodash", "$uibModal", function (Auth, lodash, $uibModal) {
    return {
        restrict: "A",
        scope: {titreModaleQrCode: "@", descriptionQrCode: "@", texteAConvertirQrCode: "@"},
        link: function (scope, element) {
            element.on("click", function () {
                var configModal = {
                    titreModale: scope.titreModaleQrCode,
                    description: scope.descriptionQrCode,
                    texteAConvertir: scope.texteAConvertirQrCode
                };
                $uibModal.open({
                    templateUrl: "modules/parametrages-generaux/modales/modale-qr-code.html",
                    controller: "ModaleQRCodeCtrl",
                    controllerAs: "ctrlModaleQRCodeCtrl",
                    size: "lg",
                    keyboard: !1,
                    backdrop: "static",
                    resolve: {
                        configModal: function () {
                            return configModal
                        }
                    }
                })
            })
        }
    }
}]);
