<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;


class homeController extends AbstractController {


    /**
     * @Route("/", name="login", methods={"GET"})
     * @param Request $request
     * @return Response
     */
    public function index(){
        return $this->render('home.html.twig', [
            'title' => 'Login',
        ]);
    }
}
?>