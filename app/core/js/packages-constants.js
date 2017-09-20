/**
 * Constant for holding static values for all packages card.
 *
 **/
(function() {
    'use strict';
    angular
        .module('hrtech.core')
        .constant('hrtech.core.packageConstant', {
            1: {
                title: 'Summer saver',
                value: '1595',
                saver: 'Save 300',
                validTill: 'Until August 31',
                promoCode: '',
                promoField: ''
            },
            2: {
                title: 'Expo Only',
                value: '299',
                saver: '',
                validTill: 'Until October',
                promoCode: '',
                promoField: ''
            },
            3: {
                title: 'Public & Governmental Sector',
                value: '1295',
                saver: 'Save 300 from the Summer Saver',
                validTill: 'Until October',
                promoCode: '',
                promoField: ''
            },
            4: {
                title: 'Standard Conference & Expo',
                value: '1695',
                saver: '',
                validTill: '',
                promoCode: 'Do you have a promo code?',
                promoField: 'Type here & then pick DAY01/DAY02 OR BOTH'
            }

        })
        .constant('hrtech.core.ticketsType', {
            1: {
                title: 'Single Attandee',
                icon: 'single_icon.svg',
                class: 'active'
            },
            2: {
                title: 'Group Tickets',
                icon: 'group_icon.svg',
                class: 'inactive'
            },
            3: {
                title: 'Investor',
                icon: 'investors.svg',
                class: 'inactive'
            },
            4: {
                title: 'Startups',
                icon: 'startup_icon.svg',
                class: 'inactive'
            }
        }
    )
})();

/*
 Early Bird Soldout / Summer Saver {icone} until aug31 / Regular / Late / Onsite registration


 Fashion axe keytar truffaut migas. Farm-to-table PBR&B. Drinking vinegar sustainable helvetica sartorial. Dreamcatcher live-edge lo-fi, chartreuse echo park pinterest ditilley glossier plaid fingerstache. Fashion axe keytar truffaut migas. Farm-to-table PBR&B. Drinking vinegar sustainable helvetica

 Cold-pressed poke thundercats brooklyn chillwave chartreuse
 Craft beer 3 wolf moon tbh hoodie
 YOLO synth hammock
 Distilery aesthetic VHS affogato gentrify bespoke
 Chia readymade schlitz brunch yuccie echo park

 */