import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';
const PdfReviewer = () => {

    return (
        <div>
            <div className='control-section'>
                {/* Render the PDF Viewer */}
                <PdfViewerComponent
                    id="container"
                    documentPath="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    serviceUrl="https://services.syncfusion.com/react/production/api/pdfviewer"
                    style={{ 'height': '730px' }}>

                    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
                </PdfViewerComponent>
            </div>
        </div>
    )
}

export default PdfReviewer