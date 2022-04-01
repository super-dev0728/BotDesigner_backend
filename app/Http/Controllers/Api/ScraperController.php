<?php
namespace App\Http\Controllers\Api;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ScraperController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request,$projectId)
    {
        return Scraper::loadAllProject($projectId);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ScraperRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ScraperRequest $request,$projectId)
    {
        $project = Project::findOrFail($projectId);
        $scraper = new Scraper($request->validated());
        $project->scrapers()->save($scraper);
        return response()->json($scraper, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,$projectId, $id)
    {
        if (!$request->user()->is_admin) {
            return Scraper::mine($request->user()->id)->project($projectId)->findOrFail($id);
        }

        return Scraper::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ScraperRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(ScraperRequest $request, $id)
    {
        $scraper = Scraper::findOrFail($id);
        $data = $request->validated();
        $scraper->update($data);
        return response()->json($scraper, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $scraper = Scraper::findOrFail($id);

        $scraper->delete();

        return response([], 200);
    }
}
