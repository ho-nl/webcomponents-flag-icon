/**
A web component that can be used to display flags by passing country name or one of multiple codes.
### Example:
    <flag-icon key="ca"></flag-icon>
    <flag-icon key="canada"></flag-icon>
    <flag-icon key="124"></flag-icon>
    <flag-icon key="can">Flag of Canada</flag-icon>  


@element flag-icon
@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="flag-icon" class="flex">
  <template>
    <style>
    :host {
      display: inline-flex;
    }
    
    iron-image {
      height: auto;
      width: 100%;
      display: inline-flex;
    }
    </style>
    <template is="dom-if" if="[[src]]" restamp="true">
      <iron-image src="{{src}}" alt="[[title]]" title\$="[[title]]" aria-label\$="[[title]]" sizing="contain"></iron-image>
    </template>
  </template>
  
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
  is: 'flag-icon',
  properties: {
    aspect: {
      value: null,
      notify: true,
      observer: 'refresh'
    },
    au: {
      type: Boolean,
      value: false,
      notify: true
    },
    br: {
      type: Boolean,
      value: false,
      notify: true
    },
    ca: {
      type: Boolean,
      value: false,
      notify: true
    },
    data: {
      value: null,
      notify: true
    },
    de: {
      type: Boolean,
      value: false,
      notify: true
    },
    es: {
      type: Boolean,
      value: false,
      notify: true
    },
    key: {
      value: null,
      notify: true,
      observer: 'refresh'
    },
    maritime: {
      type: Boolean,
      value: false,
      notify: true
    },
    racing: {
      type: Boolean,
      value: false,
      notify: true
    },
    ru: {
      type: Boolean,
      value: false,
      notify: true
    },
    square: {
      type: Boolean,
      value: false,
      notify: true,
      observer: 'refresh'
    },
    src: {
      value: null,
      notify: true
    },
    title: {
      value: null
    },
    us: {
      type: Boolean,
      value: false,
      notify: true
    },
    file: {
      type: String
    }
  },
  get importMeta() {  // required for this.resolveUrl
    return import.meta; 
  },
  refresh: function(newValue, oldValue) {
    var d, dataTitle, aspect;
    if (this.key !== null) {
      if (this.au) {
        aspect = 2;
        d = this.findAustralianState(this.key);
      } else if (this.br) {
        aspect = 3 / 2;
        d = this.findBrazilianState(this.key);
      } else if (this.ca) {
        aspect = 2;
        d = this.findCanadianProvince(this.key);
      } else if (this.de) {
        aspect = 5 / 3;
        d = this.findGermanState(this.key);
      } else if (this.es) {
        aspect = 3 / 2;
        d = this.findSpanishAutonomy(this.key);
      } else if (this.ru) {
        aspect = 3 / 2;
        d = this.findRussianRegion(this.key);
      } else if (this.us) {
        aspect = 3 / 2;
        d = this.findUSState(this.key);
      } else if (this.maritime) {
        aspect = 1;
        d = this.findMaritimeFlag(this.key);
      } else if (this.racing) {
        aspect = 4 / 3;
        d = this.findRacing(this.key);
      } else {
        aspect = 4 / 3;
        if (this.square) {
          aspect = 1;
        }
        d = this.findCountry(this.key);
      }
    }
    if (this.aspect !== null) {
      if (typeof this.aspect === 'number') {
        aspect = this.aspect;
      } else if (typeof this.aspect === 'boolean') {
        if (this.aspect && d && d.data.aspect) {
          aspect = d.data.aspect;
        }
      } else {
        if (this.aspect === '') {
          if (d && d.data.aspect) {
            aspect = d.data.aspect;
          }
        } else if (this.aspect == +this.aspect) {
          aspect = +this.aspect;
        }
      }
    }
    if (d) {
      this.data = d.data;
      dataTitle = d.title;
      this.set('src', this.resolveUrl('./svg/' + d.file + '.svg'));
    } else {
      this.data = null;
      dataTitle = null;
      this.src = null;
    }
    var userTitle = dom(this).textContent.trim();
    this.title = userTitle.length > 0 ? userTitle : dataTitle;
  },
  created: function() {
    var countries = [{
      name: 'Afghanistan',
      aspect: 1.5,
      alpha2: 'AF',
      alpha3: 'AFG',
      numeric: 4,
      endonym: [
        'Afghanestan',
        'افغانستان'
      ]
    }, {
      name: [
        'Åland Islands',
        'Aland Islands'
      ],
      alpha2: 'AX',
      alpha3: 'ALA',
      numeric: 248
    }, {
      name: 'Albania',
      aspect: 1.4,
      alpha2: 'AL',
      alpha3: 'ALB',
      numeric: 8,
      endonym: ['Shqipëria']
    }, {
      name: 'Algeria',
      aspect: 1.5,
      alpha2: 'DZ',
      alpha3: 'DZA',
      numeric: 12,
      endonym: [
        'Dzayer',
        'ⴷⵣⴰⵢⴻⵔ',
        'Al-Jazā\'ir',
        'الجزائر'
      ]
    }, {
      name: 'American Samoa',
      aspect: 2,
      alpha2: 'AS',
      alpha3: 'ASM',
      numeric: 16,
      endonym: ['Amerika Sāmoa']
    }, {
      name: 'Andorra',
      aspect: 10 / 7,
      alpha2: 'AD',
      alpha3: 'AND',
      numeric: 20
    }, {
      name: 'Angola',
      aspect: 1.5,
      alpha2: 'AO',
      alpha3: 'AGO',
      numeric: 24
    }, {
      name: 'Anguilla',
      aspect: 2,
      alpha2: 'AI',
      alpha3: 'AIA',
      numeric: 660
    }, {
      name: 'Antarctica',
      alpha2: 'AQ',
      alpha3: 'ATA',
      numeric: 10
    }, {
      name: 'Antigua and Barbuda',
      aspect: 1.5,
      alpha2: 'AG',
      alpha3: 'ATG',
      numeric: 28
    }, {
      name: 'Argentina',
      aspect: 1.6,
      alpha2: 'AR',
      alpha3: 'ARG',
      numeric: 32
    }, {
      name: 'Armenia',
      aspect: 2,
      alpha2: 'AM',
      alpha3: 'ARM',
      numeric: 51,
      endonym: [
        'Hayastán',
        'Հայաստան'
      ]
    }, {
      name: 'Aruba',
      aspect: 1.5,
      alpha2: 'AW',
      alpha3: 'ABW',
      numeric: 533
    }, {
      name: 'Australia',
      aspect: 2,
      alpha2: 'AU',
      alpha3: 'AUS',
      numeric: 36
    }, {
      name: 'Austria',
      aspect: 1.5,
      alpha2: 'AT',
      alpha3: 'AUT',
      numeric: 40,
      endonym: ['Österreich']
    }, {
      name: 'Azerbaijan',
      aspect: 2,
      alpha2: 'AZ',
      alpha3: 'AZE',
      numeric: 31,
      endonym: ['Azərbaycan']
    }, {
      name: [
        'Bahamas',
        'Bahamas, The',
        'The Bahamas'
      ],
      aspect: 2,
      alpha2: 'BS',
      alpha3: 'BHS',
      numeric: 44
    }, {
      name: 'Bahrain',
      aspect: 5 / 3,
      alpha2: 'BH',
      alpha3: 'BHR',
      numeric: 48,
      endonym: [
        'Al-Baḥrayn',
        'البحرين'
      ]
    }, {
      name: 'Bangladesh',
      aspect: 5 / 3,
      alpha2: 'BD',
      alpha3: 'BGD',
      numeric: 50,
      endonym: ['বাংলাদেশ']
    }, {
      name: 'Barbados',
      aspect: 1.5,
      alpha2: 'BB',
      alpha3: 'BRB',
      numeric: 52
    }, {
      name: 'Belarus',
      aspect: 2,
      alpha2: 'BY',
      alpha3: 'BLR',
      numeric: 112,
      endonym: [
        'Belarus\u2019',
        'Беларусь',
        'Biełaruś',
        'Belorussiya',
        'Belorussiâ',
        'Белоруссия'
      ]
    }, {
      name: 'Belgium',
      aspect: 15 / 13,
      alpha2: 'BE',
      alpha3: 'BEL',
      numeric: 56,
      endonym: [
        'België',
        'Belgique',
        'Belgien'
      ]
    }, {
      name: 'Belize',
      aspect: 1.5,
      alpha2: 'BZ',
      alpha3: 'BLZ',
      numeric: 84
    }, {
      name: 'Benin',
      aspect: 1.5,
      alpha2: 'BJ',
      alpha3: 'BEN',
      numeric: 204,
      endonym: ['Bénin']
    }, {
      name: 'Bermuda',
      aspect: 2,
      alpha2: 'BM',
      alpha3: 'BMU',
      numeric: 60
    }, {
      name: 'Bhutan',
      aspect: 1.5,
      alpha2: 'BT',
      alpha3: 'BTN',
      numeric: 64,
      endonym: [
        'Druk Yul',
        'འབྲུག\u0F0Bཡུལ'
      ]
    }, {
      name: [
        'Bolivia',
        'Plurinational State of Bolivia',
        'Bolivia, Plurinational State of'
      ],
      aspect: 22 / 15,
      alpha2: 'BO',
      alpha3: 'BOL',
      numeric: 68,
      endonym: [
        'Buliwya',
        'Wuliwya',
        'Volívia'
      ]
    }, {
      name: 'Bonaire, Sint Eustatius and Saba',
      aspect: 1.5,
      alpha2: 'BQ',
      alpha3: 'BES',
      numeric: 535
    }, {
      name: 'Bosnia and Herzegovina',
      aspect: 2,
      alpha2: 'BA',
      alpha3: 'BIH',
      numeric: 70,
      endonym: [
        'Bosna i Hercegovina',
        'Босна и Херцеговина'
      ]
    }, {
      name: 'Botswana',
      aspect: 1.5,
      alpha2: 'BW',
      alpha3: 'BWA',
      numeric: 72
    }, {
      name: 'Bouvet Island',
      alpha2: 'BV',
      alpha3: 'BVT',
      numeric: 74
    }, {
      name: [
        'Brazil',
        'Federative Republic of Brazil'
      ],
      aspect: 10 / 7,
      alpha2: 'BR',
      alpha3: 'BRA',
      numeric: 76,
      endonym: [
        'Brasil',
        'República Federativa do Brasil'
      ]
    }, {
      name: 'British Indian Ocean Territory',
      aspect: 2,
      alpha2: 'IO',
      alpha3: 'IOT',
      numeric: 86
    }, {
      name: [
        'Nation of Brunei, the Abode of Peace',
        'Brunei Darussalam',
        'Brunei'
      ],
      aspect: 2,
      alpha2: 'BN',
      alpha3: 'BRN',
      numeric: 96,
      endonym: ['بروني']
    }, {
      name: 'Bulgaria',
      aspect: 5 / 3,
      alpha2: 'BG',
      alpha3: 'BGR',
      numeric: 100,
      endonym: [
        'Bulgariya',
        'Bălgarija',
        'България'
      ]
    }, {
      name: 'Burkina Faso',
      aspect: 1.5,
      alpha2: 'BF',
      alpha3: 'BFA',
      numeric: 854
    }, {
      name: 'Burundi',
      aspect: 5 / 3,
      alpha2: 'BI',
      alpha3: 'BDI',
      numeric: 108
    }, {
      name: 'Cambodia',
      aspect: 1.5,
      alpha2: 'KH',
      alpha3: 'KHM',
      numeric: 116,
      endonym: [
        'Kampuchea',
        'កម្ពុជា'
      ]
    }, {
      name: 'Cameroon',
      aspect: 1.5,
      alpha2: 'CM',
      alpha3: 'CMR',
      numeric: 120,
      endonym: ['Cameroun']
    }, {
      name: 'Canada',
      aspect: 2,
      alpha2: 'CA',
      alpha3: 'CAN',
      numeric: 124
    }, {
      name: 'Cabo Verde',
      aspect: 1.5,
      alpha2: 'CV',
      alpha3: 'CPV',
      numeric: 132,
      endonym: ['Cabo Verde']
    }, {
      name: 'Cayman Islands',
      aspect: 2,
      alpha2: 'KY',
      alpha3: 'CYM',
      numeric: 136
    }, {
      name: 'Central African Republic',
      aspect: 5 / 3,
      alpha2: 'CF',
      alpha3: 'CAF',
      numeric: 140,
      endonym: [
        'République Centrafricaine',
        'Ködörösêse tî Bêafrîka'
      ]
    }, {
      name: 'Chad',
      aspect: 1.5,
      alpha2: 'TD',
      alpha3: 'TCD',
      numeric: 148,
      endonym: [
        'Tchad',
        'Tšād',
        'تشاد'
      ]
    }, {
      name: 'Chile',
      aspect: 1.5,
      alpha2: 'CL',
      alpha3: 'CHL',
      numeric: 152
    }, {
      name: [
        'People\'s Republic of China',
        'China'
      ],
      aspect: 1.5,
      alpha2: 'CN',
      alpha3: 'CHN',
      numeric: 156,
      endonym: [
        'Zhōngguó',
        'Zhōnghuá Rénmín Gònghéguó',
        '中國',
        '中國 (中華人民共和國)',
        '中国',
        '中国 (中华人民共和国)'
      ]
    }, {
      name: 'Christmas Island',
      aspect: 2,
      alpha2: 'CX',
      alpha3: 'CXR',
      numeric: 162
    }, {
      name: 'Cocos (Keeling) Islands',
      aspect: 2,
      alpha2: 'CC',
      alpha3: 'CCK',
      numeric: 166
    }, {
      name: 'Colombia',
      aspect: 1.5,
      alpha2: 'CO',
      alpha3: 'COL',
      numeric: 170
    }, {
      name: 'Comoros',
      aspect: 5 / 3,
      alpha2: 'KM',
      alpha3: 'COM',
      numeric: 174,
      endonym: [
        'Komori',
        'Juzur al-Qamar',
        'جزر القمر',
        'Comores'
      ]
    }, {
      name: [
        'Republic of the Congo',
        'Congo, Republic of the'
      ],
      aspect: 1.5,
      alpha2: 'CG',
      alpha3: 'COG',
      numeric: 178,
      endonym: ['République du Congo']
    }, {
      name: [
        'Democratic Republic of the Congo',
        'Congo, the Democratic Republic of the',
        'Congo, Democratic Republic of the',
        'Congo'
      ],
      aspect: 4 / 3,
      alpha2: 'CD',
      alpha3: 'COD',
      numeric: 180,
      endonym: ['République démocratique du Congo']
    }, {
      name: 'Cook Islands',
      aspect: 2,
      alpha2: 'CK',
      alpha3: 'COK',
      numeric: 184
    }, {
      name: 'Costa Rica',
      aspect: 5 / 3,
      alpha2: 'CR',
      alpha3: 'CRI',
      numeric: 188
    }, {
      name: [
        'Côte d\'Ivoire',
        'Cote d\'Ivoire',
        'République de Côte d\'Ivoire',
        'Ivory Coast'
      ],
      aspect: 1.5,
      alpha2: 'CI',
      alpha3: 'CIV',
      numeric: 384
    }, {
      name: 'Croatia',
      aspect: 2,
      alpha2: 'HR',
      alpha3: 'HRV',
      numeric: 191,
      endonym: ['Hrvatska']
    }, {
      name: 'Cuba',
      aspect: 2,
      alpha2: 'CU',
      alpha3: 'CUB',
      numeric: 192
    }, {
      name: [
        'Curaçao',
        'Curacao'
      ],
      aspect: 1.5,
      alpha2: 'CW',
      alpha3: 'CUW',
      numeric: 531,
      endonym: ['Kòrsou']
    }, {
      name: 'Cyprus',
      aspect: 1.5,
      alpha2: 'CY',
      alpha3: 'CYP',
      numeric: 196,
      endonym: [
        'Kypros',
        'Κύπρος',
        'Kıbrıs'
      ]
    }, {
      name: 'Czech Republic',
      aspect: 1.5,
      alpha2: 'CZ',
      alpha3: 'CZE',
      numeric: 203,
      endonym: [
        'Česká republika',
        'Česko'
      ]
    }, {
      name: 'Denmark',
      aspect: 37 / 28,
      alpha2: 'DK',
      alpha3: 'DNK',
      numeric: 208,
      endonym: ['Danmark']
    }, {
      name: 'Djibouti',
      aspect: 1.5,
      alpha2: 'DJ',
      alpha3: 'DJI',
      numeric: 262,
      endonym: [
        'Jībūtī',
        'جيبوتي'
      ]
    }, {
      name: 'Dominica',
      aspect: 2,
      alpha2: 'DM',
      alpha3: 'DMA',
      numeric: 212
    }, {
      name: 'Dominican Republic',
      aspect: 1.5,
      alpha2: 'DO',
      alpha3: 'DOM',
      numeric: 214,
      endonym: ['República Dominicana']
    }, {
      name: 'Ecuador',
      aspect: 1.5,
      alpha2: 'EC',
      alpha3: 'ECU',
      numeric: 218
    }, {
      name: 'Egypt',
      aspect: 1.5,
      alpha2: 'EG',
      alpha3: 'EGY',
      numeric: 818,
      endonym: [
        'Misr',
        'Masr',
        'مصر'
      ]
    }, {
      name: 'El Salvador',
      aspect: 335 / 189,
      alpha2: 'SV',
      alpha3: 'SLV',
      numeric: 222
    }, {
      name: 'Equatorial Guinea',
      aspect: 1.5,
      alpha2: 'GQ',
      alpha3: 'GNQ',
      numeric: 226,
      endonym: ['Guinea Ecuatorial']
    }, {
      name: 'Eritrea',
      aspect: 2,
      alpha2: 'ER',
      alpha3: 'ERI',
      numeric: 232,
      endonym: [
        'Iritriya',
        'إرتريا',
        'Erta',
        'ኤርትራ'
      ]
    }, {
      name: 'Estonia',
      aspect: 11 / 7,
      alpha2: 'EE',
      alpha3: 'EST',
      numeric: 233,
      endonym: ['Eesti']
    }, {
      name: 'Ethiopia',
      aspect: 2,
      alpha2: 'ET',
      alpha3: 'ETH',
      numeric: 231,
      endonym: [
        'Ityop\'ia',
        'ኢትዮጵያ'
      ]
    }, {
      name: [
        'Falkland Islands (Malvinas)',
        'Falkland Islands (Islas Malvinas)',
        'Falkland Islands',
        'Islas Malvinas'
      ],
      aspect: 2,
      alpha2: 'FK',
      alpha3: 'FLK',
      numeric: 238
    }, {
      name: 'Faroe Islands',
      aspect: 11 / 8,
      alpha2: 'FO',
      alpha3: 'FRO',
      numeric: 234,
      endonym: [
        'Føroyar',
        'Færøerne'
      ]
    }, {
      name: 'Fiji',
      aspect: 2,
      alpha2: 'FJ',
      alpha3: 'FJI',
      numeric: 242,
      endonym: [
        'Viti',
        'फ़िजी'
      ]
    }, {
      name: 'Finland',
      aspect: 18 / 11,
      alpha2: 'FI',
      alpha3: 'FIN',
      numeric: 246,
      endonym: ['Suomi']
    }, {
      name: 'France',
      aspect: 1.5,
      alpha2: 'FR',
      alpha3: 'FRA',
      numeric: 250
    }, {
      name: 'French Guiana',
      alpha2: 'GF',
      alpha3: 'GUF',
      numeric: 254,
      endonym: ['Guyane']
    }, {
      name: 'French Polynesia',
      aspect: 1.5,
      alpha2: 'PF',
      alpha3: 'PYF',
      numeric: 258,
      endonym: ['Polynésie française']
    }, {
      name: 'French Southern Territories',
      aspect: 1.5,
      alpha2: 'TF',
      alpha3: 'ATF',
      numeric: 260
    }, {
      name: 'Gabon',
      aspect: 4 / 3,
      alpha2: 'GA',
      alpha3: 'GAB',
      numeric: 266
    }, {
      name: [
        'Gambia',
        'Gambia, The',
        'The Gambia'
      ],
      aspect: 1.5,
      alpha2: 'GM',
      alpha3: 'GMB',
      numeric: 270
    }, {
      name: 'Georgia',
      aspect: 1.5,
      alpha2: 'GE',
      alpha3: 'GEO',
      numeric: 268,
      endonym: [
        'Sak\'art\'velo',
        'საქართველო'
      ]
    }, {
      name: 'Germany',
      aspect: 5 / 3,
      alpha2: 'DE',
      alpha3: 'DEU',
      numeric: 276,
      endonym: ['Deutschland']
    }, {
      name: 'Ghana',
      aspect: 1.5,
      alpha2: 'GH',
      alpha3: 'GHA',
      numeric: 288
    }, {
      name: 'Gibraltar',
      aspect: 2,
      alpha2: 'GI',
      alpha3: 'GIB',
      numeric: 292
    }, {
      name: 'Greece',
      aspect: 1.5,
      alpha2: 'GR',
      alpha3: 'GRC',
      numeric: 300,
      endonym: [
        'Hellas',
        'Ellada',
        'Ελλάδα'
      ]
    }, {
      name: 'Greenland',
      aspect: 1.5,
      alpha2: 'GL',
      alpha3: 'GRL',
      numeric: 304,
      endonym: [
        'Kalaallit Nunaat',
        'Grønland'
      ]
    }, {
      name: 'Grenada',
      aspect: 5 / 3,
      alpha2: 'GD',
      alpha3: 'GRD',
      numeric: 308
    }, {
      name: 'Guadeloupe',
      alpha2: 'GP',
      alpha3: 'GLP',
      numeric: 312
    }, {
      name: 'Guam',
      aspect: 41 / 22,
      alpha2: 'GU',
      alpha3: 'GUM',
      numeric: 316,
      endonym: ['Guåhån']
    }, {
      name: 'Guatemala',
      aspect: 1.6,
      alpha2: 'GT',
      alpha3: 'GTM',
      numeric: 320
    }, {
      name: 'Guernsey',
      aspect: 1.5,
      alpha2: 'GG',
      alpha3: 'GGY',
      numeric: 831
    }, {
      name: 'Guinea',
      aspect: 1.5,
      alpha2: 'GN',
      alpha3: 'GIN',
      numeric: 324,
      endonym: [
        'Guinée',
        'Gine'
      ]
    }, {
      name: 'Guinea-Bissau',
      aspect: 2,
      alpha2: 'GW',
      alpha3: 'GNB',
      numeric: 624,
      endonym: ['Guiné-Bissau']
    }, {
      name: 'Guyana',
      aspect: 5 / 3,
      alpha2: 'GY',
      alpha3: 'GUY',
      numeric: 328
    }, {
      name: 'Haiti',
      aspect: 5 / 3,
      alpha2: 'HT',
      alpha3: 'HTI',
      numeric: 332,
      endonym: [
        'Haïti',
        'Ayiti'
      ]
    }, {
      name: 'Heard Island and McDonald Islands',
      alpha2: 'HM',
      alpha3: 'HMD',
      numeric: 334
    }, {
      name: [
        'Holy See (Vatican City State)',
        'Vatican City'
      ],
      aspect: 1,
      alpha2: 'VA',
      alpha3: 'VAT',
      numeric: 336,
      endonym: ['Città del Vaticano']
    }, {
      name: 'Honduras',
      aspect: 2,
      alpha2: 'HN',
      alpha3: 'HND',
      numeric: 340
    }, {
      name: 'Hong Kong',
      aspect: 1.5,
      alpha2: 'HK',
      alpha3: 'HKG',
      numeric: 344,
      endonym: [
        'Heung Gong',
        '香港'
      ]
    }, {
      name: 'Hungary',
      aspect: 2,
      alpha2: 'HU',
      alpha3: 'HUN',
      numeric: 348,
      endonym: ['Magyarország']
    }, {
      name: 'Iceland',
      aspect: 25 / 18,
      alpha2: 'IS',
      alpha3: 'ISL',
      numeric: 352,
      endonym: ['Ísland']
    }, {
      name: 'India',
      aspect: 1.5,
      alpha2: 'IN',
      alpha3: 'IND',
      numeric: 356,
      endonym: [
        'Bharôt',
        'ভাৰত',
        'ভারত',
        'Bhārat',
        'ભારત',
        'भारत',
        'Bhārata',
        'ಭಾರತ',
        'Inḍya',
        'Bhāratam',
        'ഇന്ത്യ',
        'ഭാരതം',
        'Bharôtô',
        'ଭାରତ',
        'ਭਾਰਤ',
        'भारतम्',
        'Indiyā',
        'Bārata',
        'இந்தியா',
        'பாரத',
        'Bhāratadēsam',
        'భారత దేశం'
      ]
    }, {
      name: 'Indonesia',
      aspect: 1.5,
      alpha2: 'ID',
      alpha3: 'IDN',
      numeric: 360
    }, {
      name: [
        'Islamic Republic of Iran',
        'Iran, Islamic Republic of',
        'Iran'
      ],
      aspect: 7 / 4,
      alpha2: 'IR',
      alpha3: 'IRN',
      numeric: 364,
      endonym: [
        'Īrān',
        'ایران'
      ]
    }, {
      name: 'Iraq',
      aspect: 1.5,
      alpha2: 'IQ',
      alpha3: 'IRQ',
      numeric: 368,
      endonym: [
        'Al-\'Iraq',
        'العراق',
        'Îraq'
      ]
    }, {
      name: 'Ireland',
      aspect: 2,
      alpha2: 'IE',
      alpha3: 'IRL',
      numeric: 372,
      endonym: ['Éire']
    }, {
      name: [
        'Isle of Man',
        'Mann'
      ],
      aspect: 2,
      alpha2: 'IM',
      alpha3: 'IMN',
      numeric: 833,
      endonym: ['Ellan Vannin']
    }, {
      name: 'Israel',
      aspect: 11 / 8,
      alpha2: 'IL',
      alpha3: 'ISR',
      numeric: 376,
      endonym: [
        'yisrael',
        'ישראל',
        'Isrā\'īl',
        'إسرائيل'
      ]
    }, {
      name: 'Italy',
      aspect: 1.5,
      alpha2: 'IT',
      alpha3: 'ITA',
      numeric: 380,
      endonym: ['Italia']
    }, {
      name: 'Jamaica',
      aspect: 2,
      alpha2: 'JM',
      alpha3: 'JAM',
      numeric: 388
    }, {
      name: 'Japan',
      aspect: 1.5,
      alpha2: 'JP',
      alpha3: 'JPN',
      numeric: 392,
      endonym: [
        'Nihon',
        'Nippon',
        '日本'
      ]
    }, {
      name: 'Jersey',
      aspect: 5 / 3,
      alpha2: 'JE',
      alpha3: 'JEY',
      numeric: 832,
      endonym: ['Jèrri']
    }, {
      name: 'Jordan',
      aspect: 2,
      alpha2: 'JO',
      alpha3: 'JOR',
      numeric: 400,
      endonym: [
        'Al-\u2019Urdun',
        'الأردن'
      ]
    }, {
      name: 'Kazakhstan',
      aspect: 2,
      alpha2: 'KZ',
      alpha3: 'KAZ',
      numeric: 398,
      endonym: [
        'Qazaqstan',
        'Қазақстан',
        'قازاقستان',
        'Kazakhstán',
        'Казахстан'
      ]
    }, {
      name: 'Kenya',
      aspect: 1.5,
      alpha2: 'KE',
      alpha3: 'KEN',
      numeric: 404
    }, {
      name: 'Kiribati',
      aspect: 2,
      alpha2: 'KI',
      alpha3: 'KIR',
      numeric: 296
    }, {
      name: [
        'North Korea',
        'Korea, Democratic People\'s Republic of',
        'Democratic People\'s Republic of Korea',
        'Korea, North'
      ],
      aspect: 2,
      alpha2: 'KP',
      alpha3: 'PRK',
      numeric: 408,
      endonym: [
        'Chosŏn',
        '조선',
        '朝鮮',
        'Buk-han'
      ]
    }, {
      name: [
        'Korea Republic',
        'South Korea',
        'Korea, Republic of',
        'Korea, South',
        'Republic of Korea'
      ],
      aspect: 1.5,
      alpha2: 'KR',
      alpha3: 'KOR',
      numeric: 410,
      endonym: [
        'Hanguk',
        '한국',
        '韓國',
        'Nam-josŏn'
      ]
    }, {
      name: 'Kuwait',
      aspect: 2,
      alpha2: 'KW',
      alpha3: 'KWT',
      numeric: 414,
      endonym: [
        'Al-Kuwayt',
        'الكويت'
      ]
    }, {
      name: 'Kyrgyzstan',
      aspect: 5 / 3,
      alpha2: 'KG',
      alpha3: 'KGZ',
      numeric: 417,
      endonym: [
        'Кыргызстан',
        'Kirgizija',
        'Киргизия'
      ]
    }, {
      name: [
        'Lao People\'s Democratic Republic',
        'Laos'
      ],
      aspect: 1.5,
      alpha2: 'LA',
      alpha3: 'LAO',
      numeric: 418,
      endonym: [
        'Lao',
        'ປະເທດລາວ'
      ]
    }, {
      name: 'Latvia',
      aspect: 2,
      alpha2: 'LV',
      alpha3: 'LVA',
      numeric: 428,
      endonym: ['Latvija']
    }, {
      name: 'Lebanon',
      aspect: 1.5,
      alpha2: 'LB',
      alpha3: 'LBN',
      numeric: 422,
      endonym: [
        'Lubnān',
        'لبنان'
      ]
    }, {
      name: 'Lesotho',
      aspect: 1.5,
      alpha2: 'LS',
      alpha3: 'LSO',
      numeric: 426
    }, {
      name: 'Liberia',
      aspect: 19 / 10,
      alpha2: 'LR',
      alpha3: 'LBR',
      numeric: 430
    }, {
      name: 'Libya',
      aspect: 2,
      alpha2: 'LY',
      alpha3: 'LBY',
      numeric: 434,
      endonym: [
        'ⵍⵉⴱⵢⴰ',
        'Lībiyā',
        'ليبيا'
      ]
    }, {
      name: 'Liechtenstein',
      aspect: 5 / 3,
      alpha2: 'LI',
      alpha3: 'LIE',
      numeric: 438
    }, {
      name: 'Lithuania',
      aspect: 5 / 3,
      alpha2: 'LT',
      alpha3: 'LTU',
      numeric: 440,
      endonym: ['Lietuva']
    }, {
      name: 'Luxembourg',
      aspect: 5 / 3,
      alpha2: 'LU',
      alpha3: 'LUX',
      numeric: 442,
      endonym: [
        'Lëtzebuerg',
        'Luxemburg'
      ]
    }, {
      name: [
        'Macau',
        'Macao',
        'Macao Special Administrative Region of the People\'s Republic of China'
      ],
      aspect: 1.5,
      alpha2: 'MO',
      alpha3: 'MAC',
      numeric: 446
    }, {
      name: [
        'Macedonia, the former Yugoslav Republic of',
        'Macedonia'
      ],
      aspect: 2,
      alpha2: 'MK',
      alpha3: 'MKD',
      numeric: 807,
      endonym: [
        'Makedonija',
        'Македонија'
      ]
    }, {
      name: 'Madagascar',
      aspect: 1.5,
      alpha2: 'MG',
      alpha3: 'MDG',
      numeric: 450,
      endonym: ['Madagasikara']
    }, {
      name: 'Malawi',
      aspect: 1.5,
      alpha2: 'MW',
      alpha3: 'MWI',
      numeric: 454
    }, {
      name: 'Malaysia',
      aspect: 2,
      alpha2: 'MY',
      alpha3: 'MYS',
      numeric: 458
    }, {
      name: 'Maldives',
      aspect: 1.5,
      alpha2: 'MV',
      alpha3: 'MDV',
      numeric: 462,
      endonym: [
        'Dhivehi Raajje',
        'ދިވެހިރާއްޖެ'
      ]
    }, {
      name: 'Mali',
      aspect: 1.5,
      alpha2: 'ML',
      alpha3: 'MLI',
      numeric: 466
    }, {
      name: 'Malta',
      aspect: 1.5,
      alpha2: 'MT',
      alpha3: 'MLT',
      numeric: 470
    }, {
      name: 'Marshall Islands',
      aspect: 19 / 10,
      alpha2: 'MH',
      alpha3: 'MHL',
      numeric: 584
    }, {
      name: 'Martinique',
      alpha2: 'MQ',
      alpha3: 'MTQ',
      numeric: 474
    }, {
      name: 'Mauritania',
      aspect: 1.5,
      alpha2: 'MR',
      alpha3: 'MRT',
      numeric: 478,
      endonym: [
        'Muritan',
        'Agawec',
        'ⵎⵓⵔⵉⵜⴰⵏ',
        'ⴰⴳⴰⵡⵛ',
        'Mūrītānyā',
        'موريتانيا'
      ]
    }, {
      name: 'Mauritius',
      aspect: 1.5,
      alpha2: 'MU',
      alpha3: 'MUS',
      numeric: 480,
      endonym: ['Maurice']
    }, {
      name: 'Mayotte',
      alpha2: 'YT',
      alpha3: 'MYT',
      numeric: 175
    }, {
      name: 'Mexico',
      aspect: 7 / 4,
      alpha2: 'MX',
      alpha3: 'MEX',
      numeric: 484,
      endonym: [
        'México',
        'Mēxihco'
      ]
    }, {
      name: [
        'Federated States of Micronesia',
        'Micronesia, Federated States of',
        'Micronesia'
      ],
      aspect: 19 / 10,
      alpha2: 'FM',
      alpha3: 'FSM',
      numeric: 583
    }, {
      name: [
        'Republic of Moldova',
        'Moldova, Republic of',
        'Moldova'
      ],
      aspect: 2,
      alpha2: 'MD',
      alpha3: 'MDA',
      numeric: 498
    }, {
      name: 'Monaco',
      aspect: 5 / 4,
      alpha2: 'MC',
      alpha3: 'MCO',
      numeric: 492
    }, {
      name: 'Mongolia',
      aspect: 2,
      alpha2: 'MN',
      alpha3: 'MNG',
      numeric: 496,
      endonym: [
        'Mongol Uls',
        'Монгол Улс'
      ]
    }, {
      name: 'Montenegro',
      aspect: 2,
      alpha2: 'ME',
      alpha3: 'MNE',
      numeric: 499,
      endonym: [
        'Crna Gora',
        'Црна Гора'
      ]
    }, {
      name: 'Montserrat',
      aspect: 2,
      alpha2: 'MS',
      alpha3: 'MSR',
      numeric: 500
    }, {
      name: 'Morocco',
      aspect: 1.5,
      alpha2: 'MA',
      alpha3: 'MAR',
      numeric: 504,
      endonym: [
        'Amerruk',
        'Elmeɣrib',
        'ⴰⵎⵔⵔⵓⴽ',
        'ⵍⵎⵖⵔⵉⴱ',
        'Al-maɣréb',
        'المغرب'
      ]
    }, {
      name: 'Mozambique',
      aspect: 1.5,
      alpha2: 'MZ',
      alpha3: 'MOZ',
      numeric: 508,
      endonym: ['Moçambique']
    }, {
      name: [
        'Republic of the Union of Myanmar',
        'Myanmar',
        'Burma'
      ],
      aspect: 1.5,
      alpha2: 'MM',
      alpha3: 'MMR',
      numeric: 104,
      endonym: [
        'Myanma',
        'မြန်မာ'
      ]
    }, {
      name: 'Namibia',
      aspect: 1.5,
      alpha2: 'NA',
      alpha3: 'NAM',
      numeric: 516
    }, {
      name: 'Nauru',
      aspect: 2,
      alpha2: 'NR',
      alpha3: 'NRU',
      numeric: 520,
      endonym: ['Naoero']
    }, {
      name: 'Nepal',
      aspect: 0.82,
      alpha2: 'NP',
      alpha3: 'NPL',
      numeric: 524,
      endonym: [
        'Nepāla',
        'नेपाल'
      ]
    }, {
      name: 'Netherlands',
      aspect: 1.5,
      alpha2: 'NL',
      alpha3: 'NLD',
      numeric: 528,
      endonym: [
        'Nederland',
        'Nederlân'
      ]
    }, {
      name: 'New Caledonia',
      aspect: 2,
      alpha2: 'NC',
      alpha3: 'NCL',
      numeric: 540,
      endonym: ['Nouvelle-Calédonie']
    }, {
      name: 'New Zealand',
      aspect: 2,
      alpha2: 'NZ',
      alpha3: 'NZL',
      numeric: 554,
      endonym: ['Aotearoa']
    }, {
      name: 'Nicaragua',
      aspect: 5 / 3,
      alpha2: 'NI',
      alpha3: 'NIC',
      numeric: 558
    }, {
      name: 'Niger',
      aspect: 7 / 6,
      alpha2: 'NE',
      alpha3: 'NER',
      numeric: 562
    }, {
      name: 'Nigeria',
      aspect: 2,
      alpha2: 'NG',
      alpha3: 'NGA',
      numeric: 566
    }, {
      name: 'Niue',
      aspect: 2,
      alpha2: 'NU',
      alpha3: 'NIU',
      numeric: 570,
      endonym: ['Niuē']
    }, {
      name: 'Norfolk Island',
      aspect: 2,
      alpha2: 'NF',
      alpha3: 'NFK',
      numeric: 574
    }, {
      name: 'Northern Mariana Islands',
      aspect: 2,
      alpha2: 'MP',
      alpha3: 'MNP',
      numeric: 580
    }, {
      name: 'Norway',
      aspect: 11 / 8,
      alpha2: 'NO',
      alpha3: 'NOR',
      numeric: 578,
      endonym: [
        'Norge',
        'Noreg'
      ]
    }, {
      name: 'Oman',
      aspect: 2,
      alpha2: 'OM',
      alpha3: 'OMN',
      numeric: 512,
      endonym: [
        '\u2018Umān',
        'عُمان'
      ]
    }, {
      name: 'Pakistan',
      aspect: 1.5,
      alpha2: 'PK',
      alpha3: 'PAK',
      numeric: 586,
      endonym: [
        'Pākistān',
        'Pākistān (Islamic Republic of Pakistan)',
        'پاکستان'
      ]
    }, {
      name: 'Palau',
      aspect: 8 / 5,
      alpha2: 'PW',
      alpha3: 'PLW',
      numeric: 585,
      endonym: ['Belau']
    }, {
      name: [
        'State of Palestine',
        'Palestine',
        'Palestine, State of',
        'Palestinian National Authority'
      ],
      aspect: 2,
      alpha2: 'PS',
      alpha3: 'PSE',
      numeric: 275,
      endonym: [
        'Filastīn',
        'فلسطين'
      ]
    }, {
      name: 'Panama',
      aspect: 1.5,
      alpha2: 'PA',
      alpha3: 'PAN',
      numeric: 591,
      endonym: ['Panamá']
    }, {
      name: 'Papua New Guinea',
      aspect: 4 / 3,
      alpha2: 'PG',
      alpha3: 'PNG',
      numeric: 598,
      endonym: ['Papua Niugini']
    }, {
      name: 'Paraguay',
      aspect: 20 / 11,
      alpha2: 'PY',
      alpha3: 'PRY',
      numeric: 600,
      endonym: ['Paraguái']
    }, {
      name: 'Peru',
      aspect: 1.5,
      alpha2: 'PE',
      alpha3: 'PER',
      numeric: 604,
      endonym: ['Perú']
    }, {
      name: 'Philippines',
      aspect: 2,
      alpha2: 'PH',
      alpha3: 'PHL',
      numeric: 608,
      endonym: [
        'Pilipinas',
        'Filipinas',
        'pilipins+'
      ]
    }, {
      name: [
        'Pitcairn',
        'Pitcairn Islands'
      ],
      aspect: 2,
      alpha2: 'PN',
      alpha3: 'PCN',
      numeric: 612
    }, {
      name: 'Poland',
      aspect: 8 / 5,
      alpha2: 'PL',
      alpha3: 'POL',
      numeric: 616,
      endonym: ['Polska']
    }, {
      name: 'Portugal',
      aspect: 1.5,
      alpha2: 'PT',
      alpha3: 'PRT',
      numeric: 620
    }, {
      name: 'Puerto Rico',
      aspect: 1.5,
      alpha2: 'PR',
      alpha3: 'PRI',
      numeric: 630
    }, {
      name: 'Qatar',
      aspect: 28 / 11,
      alpha2: 'QA',
      alpha3: 'QAT',
      numeric: 634,
      endonym: [
        'Qaṭar',
        'قطر'
      ]
    }, {
      name: [
        'Réunion',
        'Reunion'
      ],
      alpha2: 'RE',
      alpha3: 'REU',
      numeric: 638
    }, {
      name: 'Romania',
      aspect: 1.5,
      alpha2: 'RO',
      alpha3: 'ROU',
      numeric: 642,
      endonym: ['România']
    }, {
      name: [
        'Russian Federation',
        'Russia'
      ],
      aspect: 1.5,
      alpha2: 'RU',
      alpha3: 'RUS',
      numeric: 643,
      endonym: [
        'Rossiya',
        'Rossiâ',
        'Россия1'
      ]
    }, {
      name: 'Rwanda',
      aspect: 1.5,
      alpha2: 'RW',
      alpha3: 'RWA',
      numeric: 646
    }, {
      name: [
        'Saint Barthélemy',
        'Saint Barthelemy'
      ],
      alpha2: 'BL',
      alpha3: 'BLM',
      numeric: 652,
      endonym: ['Saint-Barthélemy']
    }, {
      name: [
        'Saint Helena, Ascension and Tristan da Cunha',
        'Saint Helena, Ascension, and Tristan da Cunha'
      ],
      alpha2: 'SH',
      alpha3: 'SHN',
      numeric: 654
    }, {
      name: 'Saint Kitts and Nevis',
      aspect: 1.5,
      alpha2: 'KN',
      alpha3: 'KNA',
      numeric: 659
    }, {
      name: 'Saint Lucia',
      aspect: 2,
      alpha2: 'LC',
      alpha3: 'LCA',
      numeric: 662
    }, {
      name: [
        'Saint Martin (French part)',
        'Saint Martin',
        'Saint-Martin'
      ],
      alpha2: 'MF',
      alpha3: 'MAF',
      numeric: 663
    }, {
      name: 'Saint Pierre and Miquelon',
      alpha2: 'PM',
      alpha3: 'SPM',
      numeric: 666,
      endonym: ['Saint-Pierre et Miquelon']
    }, {
      name: 'Saint Vincent and the Grenadines',
      aspect: 1.5,
      alpha2: 'VC',
      alpha3: 'VCT',
      numeric: 670
    }, {
      name: 'Samoa',
      aspect: 2,
      alpha2: 'WS',
      alpha3: 'WSM',
      numeric: 882
    }, {
      name: 'San Marino',
      aspect: 4 / 3,
      alpha2: 'SM',
      alpha3: 'SMR',
      numeric: 674
    }, {
      name: [
        'São Tomé and Príncipe',
        'Sao Tome and Principe'
      ],
      aspect: 2,
      alpha2: 'ST',
      alpha3: 'STP',
      numeric: 678,
      endonym: ['São Tomé e Príncipe']
    }, {
      name: 'Saudi Arabia',
      aspect: 2,
      alpha2: 'SA',
      alpha3: 'SAU',
      numeric: 682,
      endonym: [
        'Al-Mamlaka Al-\u2018Arabiyyah as Sa\u2018ūdiyyah',
        'المملكة العربية السعودية'
      ]
    }, {
      name: 'Senegal',
      aspect: 1.5,
      alpha2: 'SN',
      alpha3: 'SEN',
      numeric: 686,
      endonym: ['Sénégal']
    }, {
      name: 'Serbia',
      aspect: 1.5,
      alpha2: 'RS',
      alpha3: 'SRB',
      numeric: 688,
      endonym: [
        'Srbija',
        'Србија'
      ]
    }, {
      name: 'Seychelles',
      aspect: 2,
      alpha2: 'SC',
      alpha3: 'SYC',
      numeric: 690,
      endonym: ['Sesel']
    }, {
      name: 'Sierra Leone',
      aspect: 1.5,
      alpha2: 'SL',
      alpha3: 'SLE',
      numeric: 694
    }, {
      name: 'Singapore',
      aspect: 1.5,
      alpha2: 'SG',
      alpha3: 'SGP',
      numeric: 702,
      endonym: [
        'Singapura',
        'Xīnjiāpō',
        '新加坡',
        'Singapur',
        'சிங்கப்பூர்'
      ]
    }, {
      name: [
        'Sint Maarten (Dutch part)',
        'Sint Maarten'
      ],
      aspect: 1.5,
      alpha2: 'SX',
      alpha3: 'SXM',
      numeric: 534
    }, {
      name: 'Slovakia',
      aspect: 1.5,
      alpha2: 'SK',
      alpha3: 'SVK',
      numeric: 703,
      endonym: ['Slovensko']
    }, {
      name: 'Slovenia',
      aspect: 2,
      alpha2: 'SI',
      alpha3: 'SVN',
      numeric: 705,
      endonym: ['Slovenija']
    }, {
      name: 'Solomon Islands',
      aspect: 2,
      alpha2: 'SB',
      alpha3: 'SLB',
      numeric: 90,
      endonym: ['Solomon Aelan']
    }, {
      name: 'Somalia',
      aspect: 1.5,
      alpha2: 'SO',
      alpha3: 'SOM',
      numeric: 706,
      endonym: [
        'Soomaaliya',
        'aş-Şūmāl',
        'الصومال'
      ]
    }, {
      name: 'South Africa',
      aspect: 1.5,
      alpha2: 'ZA',
      alpha3: 'ZAF',
      numeric: 710,
      endonym: [
        'Suid-Afrika',
        'iNingizimu Afrika',
        'uMzantsi Afrika',
        'Afrika-Borwa',
        'Afrika Borwa',
        'Aforika Borwa',
        'Afurika Tshipembe',
        'Afrika Dzonga',
        'iSewula Afrika'
      ]
    }, {
      name: 'South Georgia and the South Sandwich Islands',
      aspect: 2,
      alpha2: 'GS',
      alpha3: 'SGS',
      numeric: 239
    }, {
      name: [
        'South Sudan',
        'Republic of South Sudan'
      ],
      aspect: 2,
      alpha2: 'SS',
      alpha3: 'SSD',
      numeric: 728
    }, {
      name: 'Spain',
      aspect: 1.5,
      alpha2: 'ES',
      alpha3: 'ESP',
      numeric: 724,
      endonym: [
        'España',
        'Espanya',
        'Espainia',
        'Espanha'
      ]
    }, {
      name: 'Sri Lanka',
      aspect: 2,
      alpha2: 'LK',
      alpha3: 'LKA',
      numeric: 144,
      endonym: [
        'Sri Lankā',
        'ශ්‍රී ලංකාව',
        'இலங்கை'
      ]
    }, {
      name: 'Sudan',
      aspect: 2,
      alpha2: 'SD',
      alpha3: 'SDN',
      numeric: 729,
      endonym: [
        'As-Sudan',
        'السودان'
      ]
    }, {
      name: 'Suriname',
      aspect: 1.5,
      alpha2: 'SR',
      alpha3: 'SUR',
      numeric: 740
    }, {
      name: 'Svalbard and Jan Mayen',
      alpha2: 'SJ',
      alpha3: 'SJM',
      numeric: 744
    }, {
      name: 'Swaziland',
      aspect: 1.5,
      alpha2: 'SZ',
      alpha3: 'SWZ',
      numeric: 748
    }, {
      name: 'Sweden',
      aspect: 8 / 5,
      alpha2: 'SE',
      alpha3: 'SWE',
      numeric: 752,
      endonym: ['Sverige']
    }, {
      name: 'Switzerland',
      aspect: 1,
      alpha2: 'CH',
      alpha3: 'CHE',
      numeric: 756,
      endonym: [
        'Schweiz',
        'Suisse',
        'Svizzera',
        'Svizra'
      ]
    }, {
      name: [
        'Syrian Arab Republic',
        'Syria'
      ],
      aspect: 1.5,
      alpha2: 'SY',
      alpha3: 'SYR',
      numeric: 760,
      endonym: [
        'Suriyah',
        'سورية'
      ]
    }, {
      name: [
        'Taiwan, Province of China',
        'Taiwan'
      ],
      aspect: 1.5,
      alpha2: 'TW',
      alpha3: 'TWN',
      numeric: 158,
      endonym: [
        'Zhōnghuá Mínguó',
        'Táiwan',
        '中華民國',
        '臺灣/台灣'
      ]
    }, {
      name: 'Tajikistan',
      aspect: 2,
      alpha2: 'TJ',
      alpha3: 'TJK',
      numeric: 762,
      endonym: [
        'Tojikistan',
        'Тоҷикистон'
      ]
    }, {
      name: [
        'United Republic of Tanzania',
        'Tanzania, United Republic of',
        'Tanzania'
      ],
      aspect: 1.5,
      alpha2: 'TZ',
      alpha3: 'TZA',
      numeric: 834
    }, {
      name: 'Thailand',
      aspect: 1.5,
      alpha2: 'TH',
      alpha3: 'THA',
      numeric: 764,
      endonym: [
        'Mueang Thai',
        'Prathet Thai',
        'Ratcha-anachak Thai',
        'เมืองไทย',
        'ประเทศไทย',
        'ราชอาณาจักรไทย'
      ]
    }, {
      name: [
        'Democratic Republic of Timor-Leste',
        'Timor-Leste',
        'East Timor'
      ],
      aspect: 2,
      alpha2: 'TL',
      alpha3: 'TLS',
      numeric: 626,
      endonym: [
        'Timor Lorosa\'e',
        'Timor-Leste'
      ]
    }, {
      name: 'Togo',
      aspect: 1.618034,
      alpha2: 'TG',
      alpha3: 'TGO',
      numeric: 768
    }, {
      name: 'Tokelau',
      aspect: 2,
      alpha2: 'TK',
      alpha3: 'TKL',
      numeric: 772
    }, {
      name: 'Tonga',
      aspect: 2,
      alpha2: 'TO',
      alpha3: 'TON',
      numeric: 776
    }, {
      name: 'Trinidad and Tobago',
      aspect: 2,
      alpha2: 'TT',
      alpha3: 'TTO',
      numeric: 780
    }, {
      name: 'Tunisia',
      aspect: 1.5,
      alpha2: 'TN',
      alpha3: 'TUN',
      numeric: 788,
      endonym: [
        'Tunes',
        'ⵜⵓⵏⵙ',
        'Tūns',
        'تونس'
      ]
    }, {
      name: 'Turkey',
      aspect: 1.5,
      alpha2: 'TR',
      alpha3: 'TUR',
      numeric: 792,
      endonym: ['Türkiye']
    }, {
      name: 'Turkmenistan',
      aspect: 1.5,
      alpha2: 'TM',
      alpha3: 'TKM',
      numeric: 795,
      endonym: ['Türkmenistan']
    }, {
      name: 'Turks and Caicos Islands',
      aspect: 2,
      alpha2: 'TC',
      alpha3: 'TCA',
      numeric: 796
    }, {
      name: 'Tuvalu',
      aspect: 2,
      alpha2: 'TV',
      alpha3: 'TUV',
      numeric: 798
    }, {
      name: 'Uganda',
      aspect: 1.5,
      alpha2: 'UG',
      alpha3: 'UGA',
      numeric: 800
    }, {
      name: 'Ukraine',
      aspect: 2,
      alpha2: 'UA',
      alpha3: 'UKR',
      numeric: 804,
      endonym: [
        'Ukraїna',
        'Україна'
      ]
    }, {
      name: 'United Arab Emirates',
      aspect: 2,
      alpha2: 'AE',
      alpha3: 'ARE',
      numeric: 784,
      endonym: [
        'Al-\u2019Imārat Al-\u2018Arabiyyah Al-Muttaḥidah',
        'الإمارات العربيّة المتّحدة'
      ]
    }, {
      name: 'United Kingdom',
      aspect: 2,
      alpha2: 'GB',
      alpha3: 'GBR',
      numeric: 826,
      endonym: [
        'Y Deyrnas Unedig',
        'Unitit Kinrick',
        'Rìoghachd Aonaichte',
        'Ríocht Aontaithe',
        'An Rywvaneth Unys'
      ]
    }, {
      name: [
        'United States',
        'United States of America'
      ],
      aspect: 19 / 10,
      alpha2: 'US',
      alpha3: 'USA',
      numeric: 840,
      endonym: [
        'États-Unis',
        'Estados Unidos',
        'Amelika-hui-pu-\'ia'
      ]
    }, {
      name: 'United States Minor Outlying Islands',
      alpha2: 'UM',
      alpha3: 'UMI',
      numeric: 581
    }, {
      name: 'Uruguay',
      aspect: 1.5,
      alpha2: 'UY',
      alpha3: 'URY',
      numeric: 858,
      endonym: ['República Oriental del Uruguay']
    }, {
      name: 'Uzbekistan',
      aspect: 2,
      alpha2: 'UZ',
      alpha3: 'UZB',
      numeric: 860,
      endonym: [
        'O\u2018zbekiston',
        'Ўзбекистон'
      ]
    }, {
      name: 'Vanuatu',
      aspect: 5 / 3,
      alpha2: 'VU',
      alpha3: 'VUT',
      numeric: 548
    }, {
      name: [
        'Venezuela',
        'Venezuela, Bolivarian Republic of',
        'Bolivarian Republic of Venezuela'
      ],
      aspect: 1.5,
      alpha2: 'VE',
      alpha3: 'VEN',
      numeric: 862
    }, {
      name: [
        'Viet Nam',
        'Vietnam'
      ],
      aspect: 1.5,
      alpha2: 'VN',
      alpha3: 'VNM',
      numeric: 704,
      endonym: ['Việt Nam']
    }, {
      name: [
        'British Virgin Islands',
        'Virgin Islands, British'
      ],
      alpha2: 'VG',
      alpha3: 'VGB',
      numeric: 92
    }, {
      name: [
        'U.S. Virgin Islands',
        'Virgin Islands, U.S.'
      ],
      alpha2: 'VI',
      alpha3: 'VIR',
      numeric: 850
    }, {
      name: 'Wallis and Futuna',
      alpha2: 'WF',
      alpha3: 'WLF',
      numeric: 876,
      endonym: ['Wallis-et-Futuna']
    }, {
      name: 'Western Sahara',
      alpha2: 'EH',
      alpha3: 'ESH',
      numeric: 732
    }, {
      name: 'Yemen',
      aspect: 1.5,
      alpha2: 'YE',
      alpha3: 'YEM',
      numeric: 887,
      endonym: [
        'Al-Yaman',
        'اليمن'
      ]
    }, {
      name: 'Zambia',
      aspect: 1.5,
      alpha2: 'ZM',
      alpha3: 'ZMB',
      numeric: 894
    }, {
      name: 'Zimbabwe',
      aspect: 2,
      alpha2: 'ZW',
      alpha3: 'ZWE',
      numeric: 716
    }, {
      name: [
        'Abkhazia',
        'Republic of Abkhazia',
        'Apsny'
      ],
      aspect: 2,
      alpha2: 'AB',
      endonym: [
        'Apsny',
        'Аҧсны',
        'Abkhaziya',
        'Абхазия'
      ]
    }, {
      name: [
        'Republic of South Ossetia',
        'South Ossetia',
        'Tskhinvali Region',
        'SouthOssetia'
      ],
      aspect: 2,
      alpha2: 'SOUTHOSSETIA',
      endonym: [
        'Khussar Iryston',
        'Хуссар Ирыстон',
        'Samkhret Oseti',
        'სამხრეთი ოსეთი',
        'Южная Осетия',
        'Yuzhnaya Osetiya'
      ]
    }, {
      name: [
        'Turkish Republic of Northern Cyprus',
        'Northern Cyprus',
        'NorthernCyprus'
      ],
      aspect: 1.5,
      alpha2: 'NORTHERNCYPRUS',
      endonym: ['Kuzey Kıbrıs']
    }, {
      name: [
        'Kosovo',
        'Republic of Kosovo'
      ],
      aspect: 7 / 5,
      alpha2: 'XK',
      endonym: [
        'Kosova',
        'Косово'
      ]
    }, {
      name: [
        'European Union',
        'EuropeanUnion',
        'EU'
      ],
      alpha2: 'EUROPEANUNION'
    }, {
      name: [
        'United Nations',
        'UnitedNations',
        'UN'
      ],
      alpha2: 'UNITEDNATIONS'
    }, {
      name: 'England',
      alpha2: 'ENGLAND'
    }, {
      name: 'Scotland',
      alpha2: 'SCOTLAND'
    }, {
      name: 'Wales',
      alpha2: 'WALES'
    }];
    var au_states = [{
      name: 'Australian Capital Territory',
      postal: 'ACT',
      iso: 'AU-ACT'
    }, {
      name: 'New South Wales',
      postal: 'NSW',
      iso: 'AU-NSW'
    }, {
      name: 'Northern Territory',
      postal: 'NT',
      iso: 'AU-NT'
    }, {
      name: 'Queensland',
      postal: 'QLD',
      iso: 'AU-QLD'
    }, {
      name: 'South Australia',
      postal: 'SA',
      iso: 'AU-SA'
    }, {
      name: 'Tasmania',
      postal: 'TAS',
      iso: 'AU-TAS'
    }, {
      name: 'Victoria',
      postal: 'VIC',
      iso: 'AU-VIC'
    }, {
      name: 'Western Australia',
      postal: 'WA',
      iso: 'AU-WA'
    }];
    var br_states = [{
      name: 'Acre',
      iso: 'BR-AC',
      alpha2: 'AC'
    }, {
      name: 'Alagoas',
      iso: 'BR-AL',
      alpha2: 'AL'
    }, {
      name: [
        'Amapá',
        'Amapa'
      ],
      iso: 'BR-AP',
      alpha2: 'AP'
    }, {
      name: 'Amazonas',
      iso: 'BR-AM',
      alpha2: 'AM'
    }, {
      name: 'Bahia',
      iso: 'BR-BA',
      alpha2: 'BA'
    }, {
      name: [
        'Ceará',
        'Ceara'
      ],
      iso: 'BR-CE',
      alpha2: 'CE'
    }, {
      name: 'Distrito Federal',
      iso: 'BR-DF',
      alpha2: 'DF'
    }, {
      name: [
        'Espírito Santo',
        'Espirito Santo'
      ],
      iso: 'BR-ES',
      alpha2: 'ES'
    }, {
      name: [
        'Goiás',
        'Goias'
      ],
      iso: 'BR-GO',
      alpha2: 'GO'
    }, {
      name: [
        'Maranhão',
        'Maranhao'
      ],
      iso: 'BR-MA',
      alpha2: 'MA'
    }, {
      name: 'Mato Grosso',
      iso: 'BR-MT',
      alpha2: 'MT'
    }, {
      name: 'Mato Grosso do Sul',
      iso: 'BR-MS',
      alpha2: 'MS'
    }, {
      name: 'Minas Gerais',
      iso: 'BR-MG',
      alpha2: 'MG'
    }, {
      name: [
        'Pará',
        'Para'
      ],
      iso: 'BR-PA',
      alpha2: 'PA'
    }, {
      name: [
        'Paraíba',
        'Paraiba'
      ],
      iso: 'BR-PB',
      alpha2: 'PB'
    }, {
      name: [
        'Paraná',
        'Parana'
      ],
      iso: 'BR-PR',
      alpha2: 'PR'
    }, {
      name: 'Pernambuco',
      iso: 'BR-PE',
      alpha2: 'PE'
    }, {
      name: [
        'Piauí',
        'Piaui'
      ],
      iso: 'BR-PI',
      alpha2: 'PI'
    }, {
      name: 'Rio de Janeiro',
      iso: 'BR-RJ',
      alpha2: 'RJ'
    }, {
      name: 'Rio Grande do Norte',
      iso: 'BR-RN',
      alpha2: 'RN'
    }, {
      name: 'Rio Grande do Sul',
      iso: 'BR-RS',
      alpha2: 'RS'
    }, {
      name: [
        'Rondônia',
        'Rondonia'
      ],
      iso: 'BR-RO',
      alpha2: 'RO'
    }, {
      name: 'Roraima',
      iso: 'BR-RR',
      alpha2: 'RR'
    }, {
      name: 'Santa Catarina',
      iso: 'BR-SC',
      alpha2: 'SC'
    }, {
      name: [
        'São Paulo',
        'Sao Paulo'
      ],
      iso: 'BR-SP',
      alpha2: 'SP'
    }, {
      name: 'Sergipe',
      iso: 'BR-SE',
      alpha2: 'SE'
    }, {
      name: 'Tocantins',
      iso: 'BR-TO',
      alpha2: 'TO'
    }];
    var ca_provinces = [{
      name: 'Alberta',
      alpha2: 'AB'
    }, {
      name: 'British Columbia',
      alpha2: 'BC'
    }, {
      name: 'Manitoba',
      alpha2: 'MB'
    }, {
      name: 'New Brunswick',
      alpha2: 'NB'
    }, {
      name: 'Newfoundland and Labrador',
      alpha2: 'NL'
    }, {
      name: 'Northwest Territories',
      alpha2: 'NT'
    }, {
      name: 'Nova Scotia',
      alpha2: 'NS'
    }, {
      name: 'Nunavut',
      alpha2: 'NU'
    }, {
      name: 'Ontario',
      alpha2: 'ON'
    }, {
      name: 'Prince Edward Island',
      alpha2: 'PE'
    }, {
      name: [
        'Québec',
        'Quebec'
      ],
      alpha2: 'QC'
    }, {
      name: 'Saskatchewan',
      alpha2: 'SK'
    }, {
      name: 'Yukon',
      alpha2: 'YT'
    }];
    var de_states = [{
      name: [
        'Baden-Württemberg',
        'Baden-Wurttemberg'
      ],
      nuts: 'DE1'
    }, {
      name: [
        'Bavaria',
        'Free State of Bavaria'
      ],
      endonym: ['Freistaat Bayern'],
      nuts: 'DE2'
    }, {
      name: 'Berlin',
      nuts: 'DE3'
    }, {
      name: 'Brandenburg',
      endonym: ['Brannenborg'],
      nuts: 'DE4'
    }, {
      name: [
        'Bremen',
        'Free Hanseatic City of Bremen'
      ],
      endonym: ['Freie Hansestadt Bremen'],
      nuts: 'DE5'
    }, {
      name: [
        'Hamburg',
        'Free and Hanseatic City of Hamburg'
      ],
      endonym: ['Freie und Hansestadt Hamburg'],
      nuts: 'DE6'
    }, {
      name: 'Hessen',
      endonym: ['Hessia'],
      nuts: 'DE7'
    }, {
      name: [
        'Mecklenburg-Western Pomerania',
        'MeckPomm'
      ],
      endonym: ['Mecklenburg-Vorpommern'],
      nuts: 'DE8'
    }, {
      name: 'Lower Saxony',
      endonym: ['Land Niedersachsen'],
      nuts: 'DE9'
    }, {
      name: 'North Rhine-Westphalia',
      endonym: ['Nordrhein-Westfalen'],
      nuts: 'DEA'
    }, {
      name: 'Rhineland-Palatinate',
      endonym: ['Rheinland-Pfalz'],
      nuts: 'DEB'
    }, {
      name: 'Saarland',
      endonym: ['das Saarland'],
      nuts: 'DEC'
    }, {
      name: [
        'Saxony',
        'Free State of Saxony'
      ],
      endonym: ['Freistaat Sachsen'],
      nuts: 'DED'
    }, {
      name: 'Saxony-Anhalt',
      endonym: ['Sachsen-Anhalt'],
      nuts: 'DEE'
    }, {
      name: 'Schleswig-Holstein',
      nuts: 'DEF'
    }, {
      name: [
        'Thuringia',
        'Free State of Thuringia'
      ],
      endonym: ['Freistaat Thüringen'],
      nuts: 'DEG'
    }];
    var es_autonomy = [{
      name: [
        'Andalucía',
        'Andalucia'
      ],
      iso: 'ES-AN'
    }, {
      name: [
        'Aragón',
        'Aragon'
      ],
      iso: 'ES-AR'
    }, {
      name: 'Asturias',
      iso: 'ES-AS',
      endonym: ['Principado de Asturias']
    }, {
      name: 'Canary Islands',
      iso: 'ES-CN',
      endonym: ['Canarias']
    }, {
      name: 'Cantabria',
      iso: 'ES-CB'
    }, {
      name: 'Castilla-La Mancha',
      iso: 'ES-CM'
    }, {
      name: [
        'Castile and León',
        'Castile and Leon'
      ],
      iso: 'ES-CL',
      endonym: ['Castilla y León']
    }, {
      name: 'Catalonia',
      iso: 'ES-CT',
      endonym: [
        'Cataluña',
        'Catalunya'
      ]
    }, {
      name: 'Extremadura',
      iso: 'ES-EX'
    }, {
      name: 'Galicia',
      iso: 'ES-GA'
    }, {
      name: 'Balearic Islands',
      iso: 'ES-IB',
      endonym: [
        'Islas Baleares',
        'Illes Balears'
      ]
    }, {
      name: 'La Rioja',
      iso: 'ES-RI'
    }, {
      name: [
        'Community of Madrid',
        'Madrid'
      ],
      iso: 'ES-MD',
      endonym: ['Comunidad de Madrid']
    }, {
      name: 'Region of Murcia',
      iso: 'ES-MC',
      endonym: ['Región de Murcia']
    }, {
      name: 'Navarra',
      iso: 'ES-NC',
      endonym: [
        'Comunidad Foral de Navarra',
        'Nafarroako Foru Komunitatea'
      ]
    }, {
      name: 'Basque Country',
      iso: 'ES-PV',
      endonym: [
        'País Vasco',
        'Euskadi'
      ]
    }, {
      name: [
        'Valencia Community',
        'Valencia'
      ],
      iso: 'ES-VC',
      endonym: [
        'Comunitat Valenciana',
        'Comunidad Valenciana'
      ]
    }, {
      name: 'Ceuta',
      iso: 'ES-CE'
    }, {
      name: 'Melilla',
      iso: 'ES-ML'
    }];
    var ru_regions = [{
      name: [
        'Adygea',
        'Republic of Adygea',
        'Respublika Adygeya'
      ],
      iso: 'RU-AD',
      type: 'Republic',
      endonym: ['Респу́блика Адыге́я']
    }, {
      name: [
        'Altai',
        'Altai Republic',
        'Respublika Altay'
      ],
      iso: 'RU-AL',
      type: 'Republic',
      endonym: ['Респу́блика Алта́й']
    }, {
      name: [
        'Bashkortostan',
        'Republic of Bashkortostan',
        'Respublika Bashkortostan'
      ],
      iso: 'RU-BA',
      type: 'Republic',
      endonym: ['Респу́блика Башкортоста́н']
    }, {
      name: [
        'Buryatia',
        'Republic of Buryatia',
        'Respublika Buryatiya'
      ],
      iso: 'RU-BU',
      type: 'Republic',
      endonym: ['Респу́блика Буря́тия']
    }, {
      name: [
        'Chechen',
        'Chechen Republic',
        'Chechenskaya Respublika'
      ],
      iso: 'RU-CE',
      type: 'Republic',
      endonym: ['Чече́нская Респу́блика']
    }, {
      name: [
        'Chuvashia',
        'Chuvash Republic'
      ],
      iso: 'RU-CU',
      type: 'Republic',
      endonym: ['Чува́шская Респу́блика \u2014 Чува́шия']
    }, {
      name: [
        'Crimea',
        'Republic of Crimea',
        'Respublika Krym'
      ],
      iso: 'CRIMEA',
      type: 'Republic',
      endonym: ['Республика Крым']
    }, {
      name: [
        'Dagestan',
        'Republic of Dagestan',
        'Respublika Dagestan'
      ],
      iso: 'RU-DA',
      type: 'Republic',
      endonym: ['Респу́блика Дагеста́н']
    }, {
      name: [
        'Ingushetia',
        'Republic of Ingushetia',
        'Respublika Ingushetiya'
      ],
      iso: 'RU-IN',
      type: 'Republic',
      endonym: ['Респу́блика Ингуше́тия']
    }, {
      name: [
        'Kabardino-Balkar',
        'Kabardino-Balkar Republic',
        'Kabardino-Balkarskaya Respublika',
        'Kabardino-Balkaria',
        'Kabardino-Balkariya'
      ],
      iso: 'RU-KB',
      type: 'Republic',
      endonym: [
        'Кабарди́но-Балка́рская Респу́блика',
        'Кабарди́но-Балка́рия'
      ]
    }, {
      name: [
        'Kalmykia',
        'Republic of Kalmykia',
        'Respublika Kalmykiya'
      ],
      iso: 'RU-KL',
      type: 'Republic',
      endonym: ['Респу́блика Калмы́кия']
    }, {
      name: [
        'Karachay-Cherkess',
        'Karachay\u2013Cherkess Republic',
        'Karachayevo-Cherkesskaya Respublika',
        'Karachay\u2013Cherkessia',
        'Karachay\u2013Circassia',
        'Karachayevo-Cherkessiya',
        'Karachay\u2013Circassian Republic'
      ],
      iso: 'RU-KC',
      type: 'Republic',
      endonym: [
        'Карача́ево-Черке́сская Респу́блика',
        'Карача́ево-Черке́ссия'
      ]
    }, {
      name: [
        'Karelia',
        'Republic of Karelia',
        'Respublika Kareliya'
      ],
      iso: 'RU-KR',
      type: 'Republic',
      endonym: ['Респу́блика Каре́лия']
    }, {
      name: [
        'Komi',
        'Komi Republic',
        'Respublika Komi'
      ],
      iso: 'RU-KO',
      type: 'Republic',
      endonym: ['Респу́блика Ко́ми']
    }, {
      name: [
        'Mari El',
        'Mari El Republic',
        'Respublika Mariy El'
      ],
      iso: 'RU-ME',
      type: 'Republic',
      endonym: ['Респу́блика Мари́й Эл']
    }, {
      name: [
        'Mordovia',
        'Republic of Mordovia',
        'Respublika Mordoviya'
      ],
      iso: 'RU-MO',
      type: 'Republic',
      endonym: ['Респу́блика Мордо́вия']
    }, {
      name: [
        'North Ossetia-Alania',
        'Republic of North Ossetia\u2013Alania',
        'Respublika Severnaya Osetiya \u2014 Alaniya'
      ],
      iso: 'RU-SE',
      type: 'Republic',
      endonym: ['Республика Северная Осетия \u2014 Алания']
    }, {
      name: [
        'Sakha',
        'Sakha (Yakutia) Republic',
        'Respublika Sakha (Yakutiya)'
      ],
      iso: 'RU-SA',
      type: 'Republic',
      endonym: ['Республика Саха (Якутия)']
    }, {
      name: [
        'Tatarstan',
        'Republic of Tatarstan',
        'Respublika Tatarstan'
      ],
      iso: 'RU-TA',
      type: 'Republic',
      endonym: ['Респу́блика Татарста́н']
    }, {
      name: [
        'Tuva',
        'Tyva Republic',
        'Respublika Tyva'
      ],
      iso: 'RU-TY',
      type: 'Republic',
      endonym: ['Респу́блика Тыва́']
    }, {
      name: [
        'Udmurtia',
        'Udmurt Republic',
        'Udmurtskaya Respublika'
      ],
      iso: 'RU-UD',
      type: 'Republic',
      endonym: [
        'Удму́ртия',
        'Удму́ртская Pеспу́блика'
      ]
    }, {
      name: [
        'Khakasiya',
        'Republic of Khakassia',
        'Respublika Khakasiya'
      ],
      iso: 'RU-KK',
      type: 'Republic',
      endonym: [
        'Респу́блика Хака́сия',
        'Хака́сия'
      ]
    }, {
      name: [
        'Altai Krai',
        'Altaysky kray'
      ],
      iso: 'RU-ALT',
      type: 'Krais',
      endonym: ['Алта́йский край']
    }, {
      name: 'Kamchatka',
      iso: 'RU-KAM',
      type: 'Krais',
      endonym: ['Камча́тский край']
    }, {
      name: [
        'Khabarovsk',
        'Khabarovsky kray'
      ],
      iso: 'RU-KHA',
      type: 'Krais',
      endonym: ['Хаба́ровский край']
    }, {
      name: [
        'Krasnodar',
        'Krasnodarsky kray'
      ],
      iso: 'RU-KDA',
      type: 'Krais',
      endonym: ['Краснода́рский край']
    }, {
      name: [
        'Krasnoyarsk',
        'Krasnoyarsky kray'
      ],
      iso: 'RU-KYA',
      type: 'Krais',
      endonym: ['Красноя́рский край']
    }, {
      name: [
        'Perm',
        'Permsky kray'
      ],
      iso: 'RU-PER',
      type: 'Krais',
      endonym: ['Пе́рмский край']
    }, {
      name: 'Primorsky',
      iso: 'RU-PRI',
      type: 'Krais',
      endonym: ['Примо́рский край']
    }, {
      name: [
        'Stavropol',
        'Stavropolsky kray'
      ],
      iso: 'RU-STA',
      type: 'Krais',
      endonym: ['Ставропо́льский край']
    }, {
      name: [
        'Zabaykalsky',
        'Transbaikal krai'
      ],
      iso: 'RU-ZAB',
      type: 'Krais',
      endonym: ['Забайкальский край']
    }, {
      name: [
        'Amur',
        'Amur Oblast',
        'Amurskaya oblast',
        'Priamurye',
        'Amur Krai'
      ],
      iso: 'RU-AMU',
      type: 'Oblast',
      endonym: [
        'Аму́рская о́бласть',
        'Приаму́рье',
        'Аму́рский край'
      ]
    }, {
      name: [
        'Arkhangelsk',
        'Arkhangelsk Oblast',
        'Arkhangelskaya oblast'
      ],
      iso: 'RU-ARK',
      type: 'Oblast',
      endonym: ['Арха́нгельская о́бласть']
    }, {
      name: [
        'Astrakhan',
        'Astrakhan Oblast',
        'Astrakhanskaya oblast'
      ],
      iso: 'RU-AST',
      type: 'Oblast',
      endonym: ['Астраха́нская о́бласть']
    }, {
      name: [
        'Belgorod',
        'Belgorod Oblast',
        'Belgorodskaya oblast'
      ],
      iso: 'RU-BEL',
      type: 'Oblast',
      endonym: ['Белгоро́дская о́бласть']
    }, {
      name: [
        'Bryansk',
        'Bryansk Oblast',
        'Bryanskaya oblast'
      ],
      iso: 'RU-BRY',
      type: 'Oblast',
      endonym: ['Бря́нская о́бласть']
    }, {
      name: [
        'Chelyabinsk',
        'Chelyabinsk Oblast',
        'Chelyabinskaya oblast'
      ],
      iso: 'RU-CHE',
      type: 'Oblast',
      endonym: ['Челя́бинская о́бласть']
    }, {
      name: [
        'Irkutsk',
        'Irkutsk Oblast',
        'Irkutskaya oblast'
      ],
      iso: 'RU-IRK',
      type: 'Oblast',
      endonym: ['Ирку́тская о́бласть']
    }, {
      name: [
        'Ivanovo',
        'Ivanovo Oblast',
        'Ivanovskaya oblast'
      ],
      iso: 'RU-IVA',
      type: 'Oblast',
      endonym: ['Ива́новская о́бласть']
    }, {
      name: [
        'Kaliningrad',
        'Kaliningrad Oblast',
        'Kaliningradskaya oblast'
      ],
      iso: 'RU-KGD',
      type: 'Oblast',
      endonym: ['Калинингра́дская о́бласть']
    }, {
      name: [
        'Kaluga',
        'Kaluga Oblast',
        'Kaluzhskaya oblast'
      ],
      iso: 'RU-KLU',
      type: 'Oblast',
      endonym: ['Калу́жская о́бласть']
    }, {
      name: [
        'Kemerovo',
        'Kemerovo Oblast',
        'Kemerovskaya oblast',
        'Kuzbass'
      ],
      iso: 'RU-KEM',
      type: 'Oblast',
      endonym: [
        'Ке́меровская о́бласть',
        'Кузба́сс'
      ]
    }, {
      name: [
        'Kirov',
        'Kirov Oblast',
        'Kirovskaya oblast'
      ],
      iso: 'RU-KIR',
      type: 'Oblast',
      endonym: ['Ки́ровская о́бласть']
    }, {
      name: [
        'Kostroma',
        'Kostroma Oblast',
        'Kostromskaya oblast'
      ],
      iso: 'RU-KOS',
      type: 'Oblast',
      endonym: ['Костромска́я о́бласть']
    }, {
      name: [
        'Kurgan',
        'Kurgan Oblast',
        'Kurganskaya oblast'
      ],
      iso: 'RU-KGN',
      type: 'Oblast',
      endonym: ['Курга́нская о́бласть']
    }, {
      name: [
        'Kursk',
        'Kursk Oblast',
        'Kurskaya oblast'
      ],
      iso: 'RU-KRS',
      type: 'Oblast',
      endonym: ['Курская область']
    }, {
      name: [
        'Leningrad',
        'Leningrad Oblast',
        'Leningradskaya oblast'
      ],
      iso: 'RU-LEN',
      type: 'Oblast',
      endonym: ['Ленингра́дская о́бласть']
    }, {
      name: [
        'Lipetsk',
        'Lipetsk Oblast',
        'Lipetskaya oblast'
      ],
      iso: 'RU-LIP',
      type: 'Oblast',
      endonym: ['Ли́пецкая о́бласть']
    }, {
      name: [
        'Magadan',
        'Magadan Oblast',
        'Magadanskaya oblast'
      ],
      iso: 'RU-MAG',
      type: 'Oblast',
      endonym: ['Магаданская область']
    }, {
      name: [
        'Moscow',
        'Moscow Oblast',
        'Moskovskaya oblast',
        'Podmoskovye'
      ],
      iso: 'RU-MOS',
      type: 'Oblast',
      endonym: [
        'Моско́вская о́бласть',
        'Подмоско́вье'
      ]
    }, {
      name: [
        'Murmansk',
        'Murmansk Oblast',
        'Murmanskaya oblast'
      ],
      iso: 'RU-MUR',
      type: 'Oblast',
      endonym: ['Му́рманская о́бласть']
    }, {
      name: [
        'Nizhny Novgorod',
        'Nizhny Novgorod Oblast',
        'Nizhegorodskaya oblast',
        'Nizhegorod Oblast',
        'Gorky Oblast'
      ],
      iso: 'RU-NIZ',
      type: 'Oblast',
      endonym: ['Нижегоро́дская о́бласть']
    }, {
      name: [
        'Novgorod',
        'Novgorod Oblast',
        'Novgorodskaya oblast'
      ],
      iso: 'RU-NGR',
      type: 'Oblast',
      endonym: ['Новгоро́дская о́бласть']
    }, {
      name: [
        'Novosibirsk',
        'Novosibirsk Oblast',
        'Novosibirskaya oblast'
      ],
      iso: 'RU-NVS',
      type: 'Oblast',
      endonym: ['Новосиби́рская о́бласть']
    }, {
      name: [
        'Omsk',
        'Omsk Oblast',
        'Omskaya oblast'
      ],
      iso: 'RU-OMS',
      type: 'Oblast',
      endonym: ['О́мская о́бласть']
    }, {
      name: [
        'Orenburg',
        'Orenburg Oblast',
        'Orenburgskaya oblast'
      ],
      iso: 'RU-ORE',
      type: 'Oblast',
      endonym: ['Оренбу́ргская о́бласть']
    }, {
      name: [
        'Oryol',
        'Oryol Oblast',
        'Orlovskaya oblast'
      ],
      iso: 'RU-ORL',
      type: 'Oblast',
      endonym: ['Орло́вская о́бласть']
    }, {
      name: [
        'Penza',
        'Penza Oblast',
        'Penzenskaya oblast'
      ],
      iso: 'RU-PNZ',
      type: 'Oblast',
      endonym: ['Пе́нзенская о́бласть']
    }, {
      name: [
        'Rostov',
        'Rostov Oblast',
        'Rostovskaya oblast'
      ],
      iso: 'RU-ROS',
      type: 'Oblast',
      endonym: ['Росто́вская о́бласть']
    }, {
      name: [
        'Ryazan',
        'Ryazan Oblast',
        'Ryazanskaya oblast'
      ],
      iso: 'RU-RYA',
      type: 'Oblast',
      endonym: ['Ряза́нская о́бласть']
    }, {
      name: [
        'Sakhalin',
        'Sakhalin Oblast',
        'Sakhalinskaya oblast'
      ],
      iso: 'RU-SAK',
      type: 'Oblast',
      endonym: ['Сахали́нская о́бласть']
    }, {
      name: [
        'Samara',
        'Samara Oblast',
        'Samarskaya oblast',
        'Kuybyshev Oblast',
        'Kuybyshevskaya Oblast'
      ],
      iso: 'RU-SAM',
      type: 'Oblast',
      endonym: [
        'Сама́рская о́бласть',
        'Ку́йбышевская о́бласть'
      ]
    }, {
      name: [
        'Saratov',
        'Saratov Oblast',
        'Saratovskaya oblast'
      ],
      iso: 'RU-SAR',
      type: 'Oblast',
      endonym: ['Сара́товская о́бласть']
    }, {
      name: [
        'Smolensk',
        'Smolensk Oblast',
        'Smolenskaya oblast'
      ],
      iso: 'RU-SMO',
      type: 'Oblast',
      endonym: ['Смоле́нская о́бласть']
    }, {
      name: [
        'Sverdlovsk',
        'Sverdlovsk Oblast',
        'Sverdlovskaya oblast'
      ],
      iso: 'RU-SVE',
      type: 'Oblast',
      endonym: ['Свердло́вская о́бласть']
    }, {
      name: [
        'Tambov',
        'Tambov Oblast',
        'Tambovskaya oblast'
      ],
      iso: 'RU-TAM',
      type: 'Oblast',
      endonym: ['Тамбо́вская о́бласть']
    }, {
      name: [
        'Tomsk',
        'Tomsk Oblast',
        'Tomskaya oblast'
      ],
      iso: 'RU-TOM',
      type: 'Oblast',
      endonym: ['То́мская о́бласть']
    }, {
      name: [
        'Tver',
        'Tver Oblast',
        'Tverskaya oblast',
        'Kalinin Oblast'
      ],
      iso: 'RU-TVE',
      type: 'Oblast',
      endonym: [
        'Тверска́я о́бласть',
        'Кали́нинская о́бласть'
      ]
    }, {
      name: [
        'Tula',
        'Tula Oblast',
        'Tulskaya oblast'
      ],
      iso: 'RU-TUL',
      type: 'Oblast',
      endonym: ['Ту́льская о́бласть']
    }, {
      name: [
        'Tyumen',
        'Tyumen Oblast',
        'Tyumenskaya oblast'
      ],
      iso: 'RU-TYU',
      type: 'Oblast',
      endonym: ['Тюме́нская о́бласть']
    }, {
      name: [
        'Ulyanovsk',
        'Ulyanovsk Oblast',
        'Ulyanovskaya oblast'
      ],
      iso: 'RU-ULY',
      type: 'Oblast',
      endonym: ['Улья́новская о́бласть']
    }, {
      name: [
        'Vladimir',
        'Vladimir Oblast',
        'Vladimirskaya oblast'
      ],
      iso: 'RU-VLA',
      type: 'Oblast',
      endonym: ['Влади́мирская о́бласть']
    }, {
      name: [
        'Volgograd',
        'Volgograd Oblast',
        'Volgogradskaya oblast'
      ],
      iso: 'RU-VGG',
      type: 'Oblast',
      endonym: ['Волгогра́дская о́бласть']
    }, {
      name: [
        'Vologda',
        'Vologda Oblast',
        'Vologodskaya oblast'
      ],
      iso: 'RU-VLG',
      type: 'Oblast',
      endonym: ['Вологодская область']
    }, {
      name: [
        'Voronezh',
        'Voronezh Oblast',
        'Voronezhskaya oblast'
      ],
      iso: 'RU-VOR',
      type: 'Oblast',
      endonym: ['Воро́нежская о́бласть']
    }, {
      name: [
        'Yaroslavl',
        'Yaroslavl Oblast',
        'Yaroslavskaya oblast'
      ],
      iso: 'RU-YAR',
      type: 'Oblast',
      endonym: ['Яросла́вская о́бласть']
    }];
    var us_states = [{
      name: 'Alabama',
      iso: 'US-AL',
      alpha2: 'AL',
      numeric: 1,
      gpo: 'Ala.'
    }, {
      name: 'Alaska',
      iso: 'US-AK',
      alpha2: 'AK',
      numeric: 2,
      gpo: 'Alaska'
    }, {
      name: 'Arizona',
      iso: 'US-AZ',
      alpha2: 'AZ',
      numeric: 4,
      gpo: 'Ariz.'
    }, {
      name: 'Arkansas',
      iso: 'US-AR',
      alpha2: 'AR',
      numeric: 5,
      gpo: 'Ark.'
    }, {
      name: 'California',
      iso: 'US-CA',
      alpha2: 'CA',
      numeric: 6,
      gpo: 'Calif.'
    }, {
      name: 'Colorado',
      iso: 'US-CO',
      alpha2: 'CO',
      numeric: 8,
      gpo: 'Colo.'
    }, {
      name: 'Connecticut',
      iso: 'US-CT',
      alpha2: 'CT',
      numeric: 9,
      gpo: 'Conn.'
    }, {
      name: 'Delaware',
      iso: 'US-DE',
      alpha2: 'DE',
      numeric: 10,
      gpo: 'Del.'
    }, {
      name: 'District of Columbia',
      iso: 'US-DC',
      alpha2: 'DC',
      numeric: 11,
      gpo: 'D.C.'
    }, {
      name: 'Florida',
      iso: 'US-FL',
      alpha2: 'FL',
      numeric: 12,
      gpo: 'Fla.'
    }, {
      name: 'Georgia',
      iso: 'US-GA',
      alpha2: 'GA',
      numeric: 13,
      gpo: 'Ga.'
    }, {
      name: 'Hawaii',
      iso: 'US-HI',
      alpha2: 'HI',
      numeric: 15,
      gpo: 'Hawaii'
    }, {
      name: 'Idaho',
      iso: 'US-ID',
      alpha2: 'ID',
      numeric: 16,
      gpo: 'Idaho'
    }, {
      name: 'Illinois',
      iso: 'US-IL',
      alpha2: 'IL',
      numeric: 17,
      gpo: 'Ill.'
    }, {
      name: 'Indiana',
      iso: 'US-IN',
      alpha2: 'IN',
      numeric: 18,
      gpo: 'Ind.'
    }, {
      name: 'Iowa',
      iso: 'US-IA',
      alpha2: 'IA',
      numeric: 19,
      gpo: 'Iowa'
    }, {
      name: 'Kansas',
      iso: 'US-KS',
      alpha2: 'KS',
      numeric: 20,
      gpo: 'Kans.'
    }, {
      name: 'Kentucky',
      iso: 'US-KY',
      alpha2: 'KY',
      numeric: 21,
      gpo: 'Ky.'
    }, {
      name: 'Louisiana',
      iso: 'US-LA',
      alpha2: 'LA',
      numeric: 22,
      gpo: 'La.'
    }, {
      name: 'Maine',
      iso: 'US-ME',
      alpha2: 'ME',
      numeric: 23,
      gpo: 'Maine'
    }, {
      name: 'Maryland',
      iso: 'US-MD',
      alpha2: 'MD',
      numeric: 24,
      gpo: 'Md.'
    }, {
      name: 'Massachusetts',
      iso: 'US-MA',
      alpha2: 'MA',
      numeric: 25,
      gpo: 'Mass.'
    }, {
      name: 'Michigan',
      iso: 'US-MI',
      alpha2: 'MI',
      numeric: 26,
      gpo: 'Mich.'
    }, {
      name: 'Minnesota',
      iso: 'US-MN',
      alpha2: 'MN',
      numeric: 27,
      gpo: 'Minn.'
    }, {
      name: 'Mississippi',
      iso: 'US-MS',
      alpha2: 'MS',
      numeric: 28,
      gpo: 'Miss.'
    }, {
      name: 'Missouri',
      iso: 'US-MO',
      alpha2: 'MO',
      numeric: 29,
      gpo: 'Mo.'
    }, {
      name: 'Montana',
      iso: 'US-MT',
      alpha2: 'MT',
      numeric: 30,
      gpo: 'Mont.'
    }, {
      name: 'Nebraska',
      iso: 'US-NE',
      alpha2: 'NE',
      numeric: 31,
      gpo: 'Nebr.'
    }, {
      name: 'Nevada',
      iso: 'US-NV',
      alpha2: 'NV',
      numeric: 32,
      gpo: 'Nev.'
    }, {
      name: 'New Hampshire',
      iso: 'US-NH',
      alpha2: 'NH',
      numeric: 33,
      gpo: 'N.H.'
    }, {
      name: 'New Jersey',
      iso: 'US-NJ',
      alpha2: 'NJ',
      numeric: 34,
      gpo: 'N.J.'
    }, {
      name: 'New Mexico',
      iso: 'US-NM',
      alpha2: 'NM',
      numeric: 35,
      gpo: 'N.\xA0Mex.'
    }, {
      name: 'New York',
      iso: 'US-NY',
      alpha2: 'NY',
      numeric: 36,
      gpo: 'N.Y.'
    }, {
      name: 'North Carolina',
      iso: 'US-NC',
      alpha2: 'NC',
      numeric: 37,
      gpo: 'N.C.'
    }, {
      name: 'North Dakota',
      iso: 'US-ND',
      alpha2: 'ND',
      numeric: 38,
      gpo: 'N.\xA0Dak.'
    }, {
      name: 'Ohio',
      iso: 'US-OH',
      alpha2: 'OH',
      numeric: 39,
      gpo: 'Ohio'
    }, {
      name: 'Oklahoma',
      iso: 'US-OK',
      alpha2: 'OK',
      numeric: 40,
      gpo: 'Okla.'
    }, {
      name: 'Oregon',
      iso: 'US-OR',
      alpha2: 'OR',
      numeric: 41,
      gpo: 'Oreg.'
    }, {
      name: 'Pennsylvania',
      iso: 'US-PA',
      alpha2: 'PA',
      numeric: 42,
      gpo: 'Pa.'
    }, {
      name: 'Rhode Island',
      iso: 'US-RI',
      alpha2: 'RI',
      numeric: 44,
      gpo: 'R.I.'
    }, {
      name: 'South Carolina',
      iso: 'US-SC',
      alpha2: 'SC',
      numeric: 45,
      gpo: 'S.C.'
    }, {
      name: 'South Dakota',
      iso: 'US-SD',
      alpha2: 'SD',
      numeric: 46,
      gpo: 'S.\xA0Dak.'
    }, {
      name: 'Tennessee',
      iso: 'US-TN',
      alpha2: 'TN',
      numeric: 47,
      gpo: 'Tenn.'
    }, {
      name: 'Texas',
      iso: 'US-TX',
      alpha2: 'TX',
      numeric: 48,
      gpo: 'Tex.'
    }, {
      name: 'Utah',
      iso: 'US-UT',
      alpha2: 'UT',
      numeric: 49,
      gpo: 'Utah'
    }, {
      name: 'Vermont',
      iso: 'US-VT',
      alpha2: 'VT',
      numeric: 50,
      gpo: 'Vt.'
    }, {
      name: 'Virginia',
      iso: 'US-VA',
      alpha2: 'VA',
      numeric: 51,
      gpo: 'Va.'
    }, {
      name: 'Washington',
      iso: 'US-WA',
      alpha2: 'WA',
      numeric: 53,
      gpo: 'Wash.'
    }, {
      name: 'West Virginia',
      iso: 'US-WV',
      alpha2: 'WV',
      numeric: 54,
      gpo: 'W.\xA0Va.'
    }, {
      name: 'Wisconsin',
      iso: 'US-WI',
      alpha2: 'WI',
      numeric: 55,
      gpo: 'Wis.'
    }, {
      name: 'Wyoming',
      iso: 'US-WY',
      alpha2: 'WY',
      numeric: 56,
      gpo: 'Wyo.'
    }];
    var maritimeFlags = [{
      name: 'zero',
      key: 0
    }, {
      name: 'one',
      key: 1
    }, {
      name: 'two',
      key: 2
    }, {
      name: 'three',
      key: 3
    }, {
      name: 'four',
      key: 4
    }, {
      name: 'five',
      key: 5
    }, {
      name: 'six',
      key: 6
    }, {
      name: 'seven',
      key: 7
    }, {
      name: 'eight',
      key: 8
    }, {
      name: 'nine',
      key: 9
    }, {
      name: 'alpha',
      key: 'a'
    }, {
      name: 'bravo',
      key: 'b'
    }, {
      name: 'charlie',
      key: 'c'
    }, {
      name: 'delta',
      key: 'd'
    }, {
      name: 'echo',
      key: 'e'
    }, {
      name: 'foxtrot',
      key: 'f'
    }, {
      name: 'golf',
      key: 'g'
    }, {
      name: 'hotel',
      key: 'h'
    }, {
      name: 'india',
      key: 'i'
    }, {
      name: 'juliet',
      key: 'j'
    }, {
      name: 'kilo',
      key: 'k'
    }, {
      name: 'lima',
      key: 'l'
    }, {
      name: 'mike',
      key: 'm'
    }, {
      name: 'november',
      key: 'n'
    }, {
      name: 'oscar',
      key: 'o'
    }, {
      name: 'papa',
      key: 'p'
    }, {
      name: 'quebec',
      key: 'q'
    }, {
      name: 'romeo',
      key: 'r'
    }, {
      name: 'sierra',
      key: 's'
    }, {
      name: 'tango',
      key: 't'
    }, {
      name: 'uniform',
      key: 'u'
    }, {
      name: 'victor',
      key: 'v'
    }, {
      name: 'whiskey',
      key: 'w'
    }, {
      name: 'xray',
      key: 'x'
    }, {
      name: 'yankee',
      key: 'y'
    }, {
      name: 'zulu',
      key: 'z'
    }];
    var racingFlags = [{
      key: 'redcross',
      description: 'Ambulance on course'
    }, {
      key: 'whitesaltire',
      description: 'Disqualification'
    }, {
      key: 'checkered',
      description: 'Session finished / Winner'
    }, {
      key: 'yellowsaltire',
      description: 'Pit lane closed'
    }, {
      key: 'red',
      description: 'Session stopped'
    }, {
      key: 'yellow',
      description: 'Caution'
    }, {
      key: 'yellowslash',
      description: 'Faster car approaching'
    }, {
      key: 'verticalstripes',
      description: 'Debris, Fluid, or Oil on track'
    }, {
      key: 'orangecircle',
      description: 'Return to the pits to service a mechanical problem'
    }, {
      key: 'blackwhiteperbend',
      description: 'Unsportsmanlike conduct'
    }, {
      key: 'blue',
      description: 'Course partially blocked or stopped cars on course (road course only)'
    }, {
      key: 'white',
      description: 'Final lap'
    }, {
      key: 'black',
      description: 'Return to the pits for a penalty or to service a mechanical problem'
    }, {
      key: 'green',
      description: 'Start of race / Restart / End of hazard / Safe racing conditions / Pit lane open'
    }];

    function head(arr) {
      if (typeof arr === 'object') {
        if (arr.length > 0) {
          return arr[0];
        }
        return null;
      }
      return arr;
    }
    this.countries = countries;
    this.findCountry = function(id) {
      var data;
      if (!id) {
        return false;
      }
      if (typeof id === 'number' || +id == id) {
        var num = +id;
        data = countries.filter(function(element, index, array) {
          return element.numeric == num;
        });
      } else {
        var upper = id.toUpperCase();
        if (upper.length > 3) {
          data = countries.filter(function(element, index, array) {
            var name = typeof element.name === 'object' ? element.name.some(function(e) {
              return e.toUpperCase() === upper;
            }) : element.name.toUpperCase() === upper;
            return name || (element.endonym ? element.endonym.some(function(e) {
              return e.toUpperCase() === upper;
            }) : false);
          });
        } else {
          data = countries.filter(function(element, index, array) {
            return element.alpha2 === upper || element.alpha3 === upper || (element.endonym ? element.endonym.some(function(e) {
              return e.toUpperCase() === upper;
            }) : false);
          });
        }
      }
      var dir = 'country-4x3/';
      if (this.square || this.aspect == '1') {
        dir = 'country-squared/';
      }
      return head(data.map(function(element) {
        return {
          title: head(element.name),
          data: element,
          file: dir + element.alpha2.toLowerCase()
        };
      }));
    };
    this.au_states = au_states;
    this.findAustralianState = function(id) {
      var data;
      var upper = id.toUpperCase();
      if (id.length <= 3) {
        data = au_states.filter(function(element, index, array) {
          return element.postal === upper;
        });
      } else if (id.length <= 6) {
        data = au_states.filter(function(element, index, array) {
          return element.iso === upper;
        });
      } else {
        data = au_states.filter(function(element, index, array) {
          return element.name.toUpperCase() === upper;
        });
      }
      return head(data.map(function(element) {
        return {
          title: element.name,
          data: element,
          file: 'au/' + element.name.toLowerCase().replace(/ /g, '_')
        };
      }));
    };
    this.br_states = br_states;
    this.findBrazilianState = function(id) {
      var data;
      var upper = id.toUpperCase();
      if (id.length === 2) {
        data = br_states.filter(function(element, index, array) {
          return element.alpha2 === upper;
        });
      } else {
        data = br_states.filter(function(element, index, array) {
          var name = typeof element.name === 'object' ? element.name.some(function(e) {
            return e.toUpperCase() === upper;
          }) : element.name.toUpperCase() === upper;
          return element.iso === upper || name;
        });
      }
      return head(data.map(function(element) {
        return {
          title: head(element.name),
          data: element,
          file: 'br/' + head(element.name).toLowerCase().replace(/ /g, '_')
        };
      }));
    };
    this.ca_provinces = ca_provinces;
    this.findCanadianProvince = function(id) {
      var data;
      var upper = id.toUpperCase();
      if (upper.length > 2) {
        data = ca_provinces.filter(function(element, index, array) {
          return typeof element.name === 'object' ? element.name.some(function(e) {
            return e.toUpperCase() === upper;
          }) : element.name.toUpperCase() === upper;
        });
      } else {
        data = ca_provinces.filter(function(element, index, array) {
          return element.alpha2 === upper;
        });
      }
      return head(data.map(function(element) {
        return {
          title: head(element.name),
          data: element,
          file: 'ca/' + head(element.name).toLowerCase().replace(/ /g, '_')
        };
      }));
    };
    this.de_states = de_states;
    this.findGermanState = function(id) {
      var data;
      var upper = id.toUpperCase();
      if (id.length === 3) {
        data = de_states.filter(function(element, index, array) {
          return element.nuts === upper;
        });
      } else {
        data = de_states.filter(function(element, index, array) {
          var t1 = element.endonym ? element.endonym.some(function(e) {
            return e.toUpperCase() === upper;
          }) : false;
          var t2 = typeof element.name === 'object' ? element.name.some(function(e) {
            return e.toUpperCase() === upper;
          }) : element.name.toUpperCase() === upper;
          return t1 || t2;
        });
      }
      return head(data.map(function(element) {
        return {
          title: head(element.endonym) || head(element.name),
          data: element,
          file: 'de/' + head(element.name).toLowerCase().replace(/ /g, '_')
        };
      }));
    };
    this.es_autonomy = es_autonomy;
    this.findSpanishAutonomy = function(id) {
      var data;
      var upper = id.toUpperCase();
      if (id.length === 5 && id[2] === '-') {
        data = es_autonomy.filter(function(element, index, array) {
          return element.iso === upper;
        });
      } else {
        data = es_autonomy.filter(function(element, index, array) {
          var name = typeof element.name === 'object' ? element.name.some(function(e) {
            return e.toUpperCase() === upper;
          }) : element.name.toUpperCase() === upper;
          return name || (element.endonym ? element.endonym.some(function(e) {
            return e.toUpperCase() === upper;
          }) : false);
        });
      }
      return head(data.map(function(element) {
        return {
          title: head(element.name),
          data: element,
          file: 'es/' + head(element.name).toLowerCase().replace(/ /g, '_')
        };
      }));
    };
    this.ru_regions = ru_regions;
    this.findRussianRegion = function(id) {
      var data;
      var upper = id.toUpperCase();
      if ((id.length === 5 || id.length === 6) && id[2] === '-') {
        data = ru_regions.filter(function(element, index, array) {
          return element.iso === upper;
        });
      } else {
        data = ru_regions.filter(function(element, index, array) {
          var name = typeof element.name === 'object' ? element.name.some(function(e) {
            return e.toUpperCase() === upper;
          }) : element.name.toUpperCase() === upper;
          return name || (element.endonym ? element.endonym.some(function(e) {
            return e.toUpperCase() === upper;
          }) : false);
        });
      }
      return head(data.map(function(element) {
        return {
          title: head(element.name),
          data: element,
          file: 'ru/' + head(element.name).toLowerCase().replace(/ /g, '_')
        };
      }));
    };
    this.us_states = us_states;
    this.findUSState = function(id) {
      var data;
      if (typeof id === 'number' || +id == id) {
        var num = +id;
        data = us_states.filter(function(element, index, array) {
          return element.numeric == num;
        });
      } else {
        var upper = id.toUpperCase();
        if (upper.length === 2) {
          data = us_states.filter(function(element, index, array) {
            return element.alpha2 === upper;
          });
        } else {
          data = us_states.filter(function(element, index, array) {
            var t1 = element.iso === upper;
            var t2 = element.gpo.toUpperCase() === upper;
            var t3 = typeof element.name === 'object' ? element.name.some(function(e) {
              return e.toUpperCase() === upper;
            }) : element.name.toUpperCase() === upper;
            return t1 || t2 || t3;
          });
        }
      }
      return head(data.map(function(element) {
        return {
          title: head(element.name),
          data: element,
          file: 'us/' + head(element.name).toLowerCase().replace(/ /g, '_')
        };
      }));
    };
    this.maritimeFlags = maritimeFlags;
    this.findMaritimeFlag = function(id) {
      var lower = id.toLowerCase ? id.toLowerCase() : id;
      var data = maritimeFlags.filter(function(element, index, array) {
        return element.name === lower || element.key == lower;
      });
      return head(data.map(function(element) {
        return {
          title: element.name,
          data: element,
          file: 'maritime/' + element.key
        };
      }));
    };
    this.racingFlags = racingFlags;
    this.findRacing = function(id) {
      var lower = id.toLowerCase();
      var data = racingFlags.filter(function(element, index, array) {
        return element.key === lower;
      });
      return head(data.map(function(element) {
        return {
          title: element.description,
          data: element,
          file: 'racing/' + element.key
        };
      }));
    };
  }
});
