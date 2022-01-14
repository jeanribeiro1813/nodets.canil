import {Router} from "express";
import * as pageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router();

router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/cats', pageController.cats);
router.get('/fishers', pageController.fishers);

router.get('/search', SearchController.search);


export default router;