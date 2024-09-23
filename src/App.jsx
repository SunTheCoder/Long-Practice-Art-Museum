// src/App.jsx

import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import ArtDescription from './components/ArtDescription';
import { createBrowserRouter, RouterProvider, Outlet, useRouteError, isRouteErrorResponse } from 'react-router-dom';

console.log(harvardArt);

// src/App.jsx

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function PageMissing() {
  const error = useRouteError();
  if (isRouteErrorResponse(error))
    console.log(`${error.status} ${error.statusText} ${error.data}`);
  return <h2>Page Not Found</h2>;
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <PageMissing />,
    children: [
      { 
        path: "/",
        element: 
                <>
                  <h2>
                    Harvard Art Museum
                  </h2> 
                  <p>
                    Look, but Don&apos;t Touch
                  </p>
                </>
      },
      { 
       
        path: "galleries/:galleryId",
        errorElement: <PageMissing />,
        children: [
          {
            index: true,
            element: <GalleryView galleries={harvardArt.records.galleryid} />

          },
          {
            path: "art/:artId",
            element: <ArtDescription galleries={harvardArt.records}/>
          },
          {
            path: "*",
            element: <PageMissing />
          }
        ]       
      },
      // { 
      //   path: "*",
      //   element: <>Page Not Found</>
      // }
    ]
  }
]);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
