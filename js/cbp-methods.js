 
var cbpFilter = {
    mosaic: function(){
        // cubeportfolio mosaic
        $('#js-grid-mosaic').cubeportfolio({
            filters: '#js-filters-mosaic',
            loadMore: '#js-loadMore-mosaic',
            loadMoreAction: 'click',
            layoutMode: 'mosaic',
            sortToPreventGaps: true,
            mediaQueries: [{
                width: 1500,
                cols: 5
            }, {
                width: 1100,
                cols: 4
            }, {
                width: 800,
                cols: 3
            }, {
                width: 480,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'fadeOut',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'sequentially',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        });   
    },
        mosaic2: function(){
        // cubeportfolio mosaic
        $('#js-grid-mosaic2').cubeportfolio({
            filters: '#js-filters-mosaic2',
            loadMore: '#js-loadMore-mosaic',
            loadMoreAction: 'click',
            layoutMode: 'mosaic',
            sortToPreventGaps: true,
            mediaQueries: [{
                width: 1500,
                cols: 5
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 800,
                cols: 3
            }, {
                width: 480,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'fadeOut',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'sequentially',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        });   
    },
    // cubeportfolio single Item
    singleItem : function (){
        $('#js-grid-col-one').cubeportfolio({
            filters: '#js-filters-col-one',
            loadMoreAction: 'click',
            layoutMode: 'mosaic',
            sortToPreventGaps: true,
            mediaQueries: [{
                width: 1500,
                cols: 1
            }, {
                width: 1100,
                cols: 1
            }, {
                width: 800,
                cols: 1
            }, {
                width: 480,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'fadeOut',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'sequentially',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        });
    },
    // cubeportfolio double Item
    doubleItem : function (){
        $('#js-grid-col-two').cubeportfolio({
            filters: '#js-filters-col-two',
            loadMoreAction: 'click',
            layoutMode: 'mosaic',
            sortToPreventGaps: true,
            mediaQueries: [{
                width: 1500,
                cols: 2
            }, {
                width: 1100,
                cols: 2
            }, {
                width: 800,
                cols: 2
            }, {
                width: 480,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'fadeOut',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'sequentially',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        });
    },
    // cubeportfolio triple  Item
    tripleItem : function (){
        $('#js-grid-col-three').cubeportfolio({
            filters: '#js-filters-col-three',
            loadMoreAction: 'click',
            layoutMode: 'mosaic',
            sortToPreventGaps: true,
            mediaQueries: [{
                width: 1500,
                cols: 3
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 800,
                cols: 3
            }, {
                width: 480,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'fadeOut',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'sequentially',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        });
    }
}
   

